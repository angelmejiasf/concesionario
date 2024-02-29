-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-02-2023 a las 14:13:48
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `concesionario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cli` int(11) NOT NULL,
  `nombre_cli` varchar(255) NOT NULL,
  `direccion_cli` varchar(255) NOT NULL,
  `fechanac_cli` datetime NOT NULL,
  `telefono_cli` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cli`, `nombre_cli`, `direccion_cli`, `fechanac_cli`, `telefono_cli`) VALUES
(1, 'Juan Cliente', 'Dirección de Juan Cliente', '2023-11-05 23:00:00', '555555555'),
(2, 'Maria Cliente', 'Dirección de Maria Cliente', '0000-00-00 00:00:00', '555555555'),
(3, 'Miguel Cliente', 'Dirección de Maria Miguel', '0000-00-00 00:00:00', '555555555');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `fecha_compra` datetime DEFAULT NULL,
  `precio_compra` float NOT NULL,
  `vehiculoIdVeh` int(11) NOT NULL,
  `clienteIdCli` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`fecha_compra`, `precio_compra`, `vehiculoIdVeh`, `clienteIdCli`) VALUES
('2020-12-29 23:00:00', 75000, 1, 1),
('2020-12-30 23:00:00', 75000, 1, 2),
('2022-10-02 22:00:00', 40000, 2, 1),
('2021-02-02 23:00:00', 40000, 2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fabricantes`
--

CREATE TABLE `fabricantes` (
  `id_fab` int(11) NOT NULL,
  `nombre_fab` varchar(255) NOT NULL,
  `direccion_fab` varchar(255) NOT NULL,
  `fechanac_fab` datetime NOT NULL,
  `telefono_fab` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `fabricantes`
--

INSERT INTO `fabricantes` (`id_fab`, `nombre_fab`, `direccion_fab`, `fechanac_fab`, `telefono_fab`) VALUES
(1, 'fabricante Citroen', 'dirección Citroen', '0000-00-00 00:00:00', '555555555'),
(2, 'fabricante BMW', 'dirección BMW', '0000-00-00 00:00:00', '555555555');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `nombre_user` varchar(255) NOT NULL,
  `apellidos_user` varchar(255) NOT NULL,
  `email_user` varchar(255) DEFAULT NULL,
  `password_user` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `nombre_user`, `apellidos_user`, `email_user`, `password_user`) VALUES
(1, 'Pepito', 'Pérez', 'pepito@perez.es', '$2a$10$TOsY3s8U5DKWTYqHziy42ejamtiK6jPjweWCK6/LsSUYBEmMkSfq6'),
(2, 'Manolito', 'Gafotas', 'manolito@gafotas.es', '$2a$10$zPYRoJ7BRIZV4BwelD6roOzHr6TP4gX9bQWiGsGbiveGPgXjMKjPu');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `id_veh` int(11) NOT NULL,
  `nombre_veh` varchar(255) NOT NULL,
  `unidades_veh` int(11) NOT NULL,
  `precio_veh` float NOT NULL,
  `fabricanteIdFab` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`id_veh`, `nombre_veh`, `unidades_veh`, `precio_veh`, `fabricanteIdFab`) VALUES
(1, 'M3', 3, 98456, 2),
(2, 'Serie 3 Touring', 5, 42050, 2),
(3, 'C5 x business', 2, 49715, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cli`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`vehiculoIdVeh`,`clienteIdCli`),
  ADD KEY `clienteIdCli` (`clienteIdCli`);

--
-- Indices de la tabla `fabricantes`
--
ALTER TABLE `fabricantes`
  ADD PRIMARY KEY (`id_fab`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email_user` (`email_user`);

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id_veh`),
  ADD KEY `fabricanteIdFab` (`fabricanteIdFab`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cli` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `fabricantes`
--
ALTER TABLE `fabricantes`
  MODIFY `id_fab` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `id_veh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`vehiculoIdVeh`) REFERENCES `vehiculos` (`id_veh`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`clienteIdCli`) REFERENCES `clientes` (`id_cli`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD CONSTRAINT `vehiculos_ibfk_1` FOREIGN KEY (`fabricanteIdFab`) REFERENCES `fabricantes` (`id_fab`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
