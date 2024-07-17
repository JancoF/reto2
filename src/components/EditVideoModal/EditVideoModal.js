import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useVideoContext } from '../../videoContext';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #1E1E1E;
  padding: 2rem;
  border-radius: 4px;
  width: 90%;
  max-width: 500px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
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

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 1rem;
`;

const EditVideoModal = () => {
  const { editingVideo, editVideo, stopEditing, isEditModalOpen } = useVideoContext();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    imageUrl: '',
    videoUrl: '',
    description: ''
  });

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
    editVideo(editingVideo.id, formData);
  };

  if (!isEditModalOpen) return null;

  return (
    <ModalBackground>
      <ModalContent>
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
            <option value="FRONT END">Front End</option>
            <option value="BACK END">Back End</option>
            <option value="INNOVACIÓN Y GESTIÓN">Innovación y Gestión</option>
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
          <Input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descripción"
          />
          <div>
            <Button type="submit">Actualizar</Button>
            <Button type="button" onClick={stopEditing}>Cancelar</Button>
          </div>
        </Form>
      </ModalContent>
    </ModalBackground>
  );
};

export default EditVideoModal;