import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useVideoContext } from '../../videoContext';


const FormContainer = styled.div`
  background-color: #1E1E1E;
  padding: 2rem;
  border-radius: 4px;
  max-width: 600px;
  margin: 2rem auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #FFFFFF;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #53585D;
  border: none;
  border-radius: 4px;
  color: #FFFFFF;
`;

const Select = styled.select`
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #53585D;
  border: none;
  border-radius: 4px;
  color: #FFFFFF;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #53585D;
  border: none;
  border-radius: 4px;
  color: #FFFFFF;
  min-height: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

const SaveButton = styled(Button)`
  background-color: #2A7AE4;
  color: #FFFFFF;
`;

const ClearButton = styled(Button)`
  background-color: #9E9E9E;
  color: #000000;
`;


const NewVideoForm = () => {
  const { addVideo, editVideo, editingVideo, stopEditing } = useVideoContext();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    imageUrl: '',
    videoUrl: '',
    description: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (editingVideo) {
      setFormData(editingVideo);
    }
  }, [editingVideo]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(value => value === '')) {
      alert('Por favor, complete todos los campos');
      return;
    }
    if (editingVideo) {
      editVideo(editingVideo.id, formData);
      stopEditing();
    } else {
      addVideo(formData);
    }
    navigate('/');
  };

  const handleClear = () => {
    setFormData({
      title: '',
      category: '',
      imageUrl: '',
      videoUrl: '',
      description: ''
    });
    if (editingVideo) {
      stopEditing();
    }
  };



  return (
    <FormContainer>
          <Title>{editingVideo ? 'Editar Video' : 'Nuevo Video'}</Title>
          <Form onSubmit={handleSubmit}>
        <Input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Título"
        />
        <Select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Seleccione una categoría</option>
          <option value="front-end">Front End</option>
          <option value="back-end">Back End</option>
          <option value="innovacion">Innovación y Gestión</option>
        </Select>
        <Input
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="URL de la imagen"
        />
        <Input
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleChange}
          placeholder="URL del video"
        />
        <TextArea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción"
        />
        <ButtonContainer>
          <SaveButton type="submit">{editingVideo ? 'Actualizar' : 'Guardar'}</SaveButton>
          <ClearButton type="button" onClick={handleClear}>Limpiar</ClearButton>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default NewVideoForm;