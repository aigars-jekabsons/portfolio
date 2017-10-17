-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 17, 2017 at 03:31 PM
-- Server version: 5.6.26-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wwwajtec_ajtechlab`
--

-- --------------------------------------------------------

--
-- Table structure for table `ContactMeForm`
--

CREATE TABLE `ContactMeForm` (
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `Replied` varchar(255) NOT NULL DEFAULT 'Nop',
  `ID` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `content_introText`
--

CREATE TABLE `content_introText` (
  `title1` varchar(255) NOT NULL,
  `title2` varchar(255) NOT NULL,
  `arrowtext` varchar(255) NOT NULL,
  `bubbletext` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `content_introText`
--

INSERT INTO `content_introText` (`title1`, `title2`, `arrowtext`, `bubbletext`) VALUES
('I\'m AJ', 'Passionate Angular Full stack developer', 'View my work', 'Hi,');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` char(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(5, 'aigars.jekabsons', '$2a$10$Z3y224.q982JQWLAZJj0eepzfjLDYcR0nDpRx0jB5eCordU7auZfC'),
(6, 'aigars_jekabsons', '$2a$10$vEAZ2GXlEwjc8P/ugAf40Or9vx7a56tSkLkI6HtGlhNqM8yZUFWtC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ContactMeForm`
--
ALTER TABLE `ContactMeForm`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ContactMeForm`
--
ALTER TABLE `ContactMeForm`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
