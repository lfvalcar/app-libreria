'use client'
import React, { FC, useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import PlusIcon from "./Icons/PlusIcon";
import { IColumn, ILibro } from "@/interfaces/ILibros";
import Cookie from "js-cookie";
import { useForm } from "react-hook-form";

interface Props {
  campos: IColumn[]
}

export const ModalForm: FC<Props> = ({ campos }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<ILibro>();
  const onInsertLibro = async () => {
    const token = Cookie.get('token');
    if (token) {
      // console.log(formData)
      // await createLibro(formData, token);
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
                {campos.map((item) => (
                  <Input
                    key={item.key}
                    placeholder={item.label}
                    variant="bordered"
                    classNames={{
                      base: "max-w-full sm:max-w-[18rem] h-10",
                      input: "text-small focus:outline-none border-transparent focus:border-transparent focus:ring-0",
                      inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                  />
                ))}
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
