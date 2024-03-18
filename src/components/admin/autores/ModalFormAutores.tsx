'use client'
import React, { FC } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import PlusIcon from "../icons/PlusIcon";
import { IColumn } from "@/interfaces/ILibros";
import Cookie from "js-cookie";
import { useForm } from "react-hook-form";
import { IAutor } from "@/interfaces/IAutores";
import { insertAutor } from "@/model/dataAutores";

interface Props {
  campos: IColumn[]
}

export const ModalFormAutores: FC<Props> = ({ campos }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<IAutor>();
  const onInsertAutor = async ({id,nif,nombre,foto,localidad}:IAutor) => {
    const registro = {id,nif,nombre,foto,localidad}
    const token = Cookie.get('token');
    if (token) {
      await insertAutor(registro, token);
      console.log('Autor creado exitosamente.');
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
            <form onSubmit={ handleSubmit(onInsertAutor) } noValidate>
              <ModalHeader className="flex flex-col gap-1">Nueva inserción</ModalHeader>
              <ModalBody>
                  <input
                  { ...register('id', {
                    required:'id es requerido'
                  })}
                  id='id'
                  name='id'
                  type="text"
                  placeholder='ID'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                  { ...register('nif', {
                    required:'nif es requerido'
                  })}
                  id='nif'
                  name='nif'
                  type="text"
                  placeholder='NIF'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                  { ...register('nombre', {
                    required:'nombre es requerido'
                  })}
                  id='nombre'
                  name='nombre'
                  type="text"
                  placeholder='NOMBRE'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                  { ...register('foto', {
                    required:'foto es requerido'
                  })}
                  id='foto'
                  name='foto'
                  type="text"
                  placeholder='FOTO'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                  { ...register('localidad', {
                    required:'localidad es requerido'
                  })}
                  id='localidad'
                  name='localidad'
                  type="text"
                  placeholder='LOCALIDAD'
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
