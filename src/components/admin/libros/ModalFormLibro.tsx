'use client'
import React, { FC, useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import PlusIcon from "../../commons/Icons/PlusIcon";
import { IColumn, ILibro } from "@/interfaces/ILibros";
import Cookie from "js-cookie";
import { useForm } from "react-hook-form";
import { insertLibro } from "@/model/dataLibros";

export const ModalFormLibro = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<ILibro>();
  const onInsertLibro = async ({isbn,title,pageCount,publishedDate,thumbnailUrl,shortDescription,longDescription,status,precio,autor,categoria,editorial}:ILibro) => {
    const registro = {isbn,title,pageCount,publishedDate,thumbnailUrl,shortDescription,longDescription,status,precio,autor,categoria,editorial}
    console.log(registro)
    const token = Cookie.get('token');
    if (token) {
      await insertLibro(registro, token);
      console.log('Libro creado exitosamente.');
    } else {
      console.error('No se pudo obtener el token de acceso.');
      // Aquí puedes manejar el caso en que no se pueda obtener el token de acceso
    }
};


  return (
    <>
      <Button onPress={onOpen} color="primary" endContent={<PlusIcon />}>Add New</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={ handleSubmit(onInsertLibro) } noValidate>
              <ModalHeader className="flex flex-col gap-1">Nueva inserción</ModalHeader>
              <ModalBody>
                  <input 
                  { ...register('isbn', {
                    required:'isbn es requerido'
                  })}
                  id='isbn'
                  name='isbn'
                  type="text"
                  placeholder="ISBN"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input 
                  { ...register('title', {
                    required:'title es requerido'
                  })}
                  id='title'
                  name='title'
                  type="text"
                  placeholder="TITULO"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input 
                  { ...register('pageCount', {
                    required:'Paginas es requerido',
                    valueAsNumber: true
                  })}
                  id='pageCount'
                  name='pageCount'
                  type="number"
                  placeholder="PÁGINAS"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input 
                  { ...register('shortDescription')}
                  id='shortDescription'
                  name='shortDescription'
                  type="text"
                  placeholder='DESCRIPCIÓN CORTA'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input 
                  { ...register('longDescription')}
                  id='longDescription'
                  name='longDescription'
                  type="text"
                  placeholder='DESCRIPCIÓN LARGA'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input 
                  { ...register('publishedDate', {
                    required:'Fecha publicación es requerido'
                  })}
                  id='publishedDate'
                  name='publishedDate'
                  type="text"
                  placeholder='FECHA PUBLICACIÓN'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                  { ...register('thumbnailUrl')}
                  id='thumbnailUrl'
                  name='thumbnailUrl'
                  type="text"
                  placeholder='URL IMAGEN'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input 
                  { ...register('status', {
                    required:'Estado es requerido'
                  })}
                  id='status'
                  name='status'
                  type="text"
                  placeholder='ESTADO'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input 
                  { ...register('precio', {
                    required:'Precio es requerido',
                    valueAsNumber: true
                  })}
                  id='precio'
                  name='precio'
                  type="number"
                  placeholder='Precio'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input 
                  { ...register('autor', {
                    required:'Autor es requerido'
                  })}
                  id='autor'
                  name='autor'
                  type="text"
                  placeholder='AUTOR'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input 
                  { ...register('categoria', {
                    required:'Categoria publicación es requerido'
                  })}
                  id='categoria'
                  name='categoria'
                  type="text"
                  placeholder='CATEGORIA'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input 
                  { ...register('editorial', {
                    required:'Editorial es requerido'
                  })}
                  id='editorial'
                  name='editorial'
                  type="text"
                  placeholder='EDITORIAL'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit">
                  Insertar
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
