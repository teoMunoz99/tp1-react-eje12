import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import ListaNoticias from "./ListaNoticias";
import { useState, useEffect } from "react";
import './Formulario.css';

const Formulario = () => {
  const [noticia, setNoticia] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [region, setRegion] = useState('');
  //guardo el valor del select
  const handleChangeCategoria = (event) => {
    setCategoria(event.target.value);
  };
  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
  };


  useEffect(() => {
    if(categoria){
      consultarAPI();
    }
  }, [categoria, region]);

  const consultarAPI = async () => {
    //realizo la peticion get a la api de noticias
    try {
      const respuesta = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${categoria}/${region}.json`);
      const datos = await respuesta.json();
      setNoticia(datos.articles);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Container className="p-4" id="contenedorPrincipal">
      <section>
        <h3 className="text-center mb-3">Buscar por categoría</h3>
        <Form.Select aria-label="Default select example" id='inputSelect' value={categoria} onChange={handleChangeCategoria}>
          <option value="">Categorías</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </Form.Select>
        <p className="text-center mt-2">Categoría seleccionada: {categoria}</p>
        <Form.Select aria-label="Default select example" id='inputSelectRegion' value={region} onChange={handleChangeRegion}>
          <option value="">Región</option>
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="au">Australia</option>
          <option value="ru">Russia</option>
          <option value="fr">France</option>
          <option value="gb">United Kingdom</option>
        </Form.Select>
        <p className="text-center mt-2">Región seleccionada: {region}</p>
      </section>
      <ListaNoticias noticia={noticia} categoria={categoria}></ListaNoticias>
    </Container>
  );
};

export default Formulario;
