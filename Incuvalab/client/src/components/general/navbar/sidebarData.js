import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Proyectos activos',
    path: '/controlPage',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Solicitudes',
    path: '/controlPageAprove',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Proyectos completados',
    path: '/controlPageComplete',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Baul de registros',
    path: '/controlPageRecycle',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Crear campaña',
    path: '/createFunding',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Administración de usuarios',
    path: '/controlPageUser',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Agregar administrador',
    path: '/createAdmin',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
];