CREATE DATABASE  IF NOT EXISTS `VideoStore` /*!40100 DEFAULT CHARACTER SET utf8 */; 
USE `VideoStore`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win32 (x86)
--
-- Host: localhost    Database: videostore
-- ------------------------------------------------------
-- Server version	5.6.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actsin`
--

DROP TABLE IF EXISTS `actsin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actsin` (
  `starID` int(11) NOT NULL DEFAULT '0',
  `movieNum` int(11) NOT NULL,
  PRIMARY KEY (`starID`,`movieNum`),
  KEY `movieNum` (`movieNum`),
  CONSTRAINT `actsin_ibfk_1` FOREIGN KEY (`starID`) REFERENCES `stars` (`starID`),
  CONSTRAINT `actsin_ibfk_2` FOREIGN KEY (`movieNum`) REFERENCES `movies` (`movieNum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actsin`
--

LOCK TABLES `actsin` WRITE;
/*!40000 ALTER TABLE `actsin` DISABLE KEYS */;
INSERT INTO `actsin` VALUES (100,1000),(101,1000),(102,1001),(103,1001),(104,1001),(105,1002),(106,1002),(107,1002),(108,1003),(109,1003),(110,1003),(111,1003),(112,1003),(113,1003),(114,1003),(115,1003),(116,1004),(117,1004),(118,1004),(119,1004),(120,1021),(121,1021),(122,1022),(123,1022),(124,1022),(125,1023),(126,1023),(127,1024),(128,1024),(129,1025),(130,1025),(131,1026),(132,1026);
/*!40000 ALTER TABLE `actsin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `copies`
--

DROP TABLE IF EXISTS `copies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `copies` (
  `barcode` varchar(10) NOT NULL DEFAULT '',
  `movieNum` int(11) NOT NULL,
  `format` varchar(20) NOT NULL,
  `rentalCode` varchar(3) NOT NULL,
  PRIMARY KEY (`barcode`),
  KEY `movieNum` (`movieNum`),
  KEY `rentalCode` (`rentalCode`),
  CONSTRAINT `copies_ibfk_1` FOREIGN KEY (`movieNum`) REFERENCES `movies` (`movieNum`),
  CONSTRAINT `copies_ibfk_2` FOREIGN KEY (`rentalCode`) REFERENCES `rentalrates` (`rentalCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `copies`
--

LOCK TABLES `copies` WRITE;
/*!40000 ALTER TABLE `copies` DISABLE KEYS */;
INSERT INTO `copies` VALUES ('1240028769',1000,'DVD','D'),('1240038769',1000,'DVD','D'),('1240058769',1000,'DVD','D'),('1240078769',1000,'DVD','D'),('1240118769',1000,'DVD','D'),('1240138769',1000,'Blu-ray','D'),('1240178769',1001,'DVD','D'),('1240198769',1001,'DVD','D'),('1240238769',1001,'DVD','D'),('1240298769',1001,'DVD','D'),('1240318769',1001,'Blu-ray','D'),('1240378769',1001,'Blu-ray','D'),('1240418769',1002,'DVD','D'),('1240438769',1002,'DVD','D'),('1240478769',1002,'DVD','D'),('1240538769',1002,'Blu-ray','D'),('1240598769',1002,'Blu-ray','D'),('1240618769',1002,'Blu-ray','D'),('1240678769',1003,'DVD','D'),('1240718769',1003,'DVD','D'),('1240738769',1003,'Blu-ray','D'),('1240798769',1003,'Blu-ray','D'),('1240838769',1003,'Blu-ray','D'),('1240898769',1003,'Blu-ray','D'),('1240978769',1004,'DVD','D'),('1241018769',1004,'Blu-ray','D'),('1241038769',1004,'Blu-ray','D'),('1241078769',1004,'Blu-ray','D'),('1241098769',1004,'Blu-ray','D'),('1241138769',1004,'Blu-ray','D'),('1241278769',1005,'DVD','D'),('1241318769',1005,'DVD','D'),('1241378769',1005,'DVD','D'),('1241398769',1005,'Blu-ray','D'),('1241498769',1006,'DVD','WL'),('1241518769',1007,'DVD','WL'),('1241578769',1008,'DVD','D'),('1241638769',1008,'DVD','D'),('1241678769',1008,'Blu-ray','D'),('1241738769',1008,'Blu-ray','D'),('1241798769',1009,'DVD','WL'),('1241818769',1010,'DVD','WL'),('1241918769',1010,'DVD','WL'),('1241938769',1011,'DVD','WL'),('1241978769',1011,'DVD','WL'),('1241998769',1012,'DVD','WN'),('1242118769',1012,'DVD','WN'),('1242238769',1012,'Blu-ray','WN'),('1242278769',1013,'DVD','WN'),('1242298769',1013,'Blu-ray','WN'),('1242338769',1013,'Blu-ray','WN'),('1242398769',1014,'DVD','WL'),('1242418769',1014,'DVD','WL'),('1242518769',1015,'DVD','WL'),('1242578769',1015,'DVD','WL'),('1242638769',1016,'DVD','D'),('1242698769',1016,'Blu-ray','D'),('1242718769',1016,'Blu-ray','D'),('1242778769',1016,'Blu-ray','D'),('1242818769',1017,'DVD','WL'),('1242838769',1018,'DVD','WL'),('1242938769',1019,'DVD','WL'),('1243078769',1020,'DVD','WL'),('1243118769',1020,'DVD','WL'),('1243138769',1020,'DVD','WL'),('1244008769',1021,'DVD','WL'),('1244018769',1022,'DVD','D'),('1244028769',1022,'DVD','D'),('1244038769',1023,'DVD','D'),('1244048769',1023,'DVD','D'),('1244058769',1023,'DVD','D'),('1244068769',1023,'DVD','D'),('1244078769',1024,'DVD','WN'),('1244088769',1024,'DVD','WN'),('1244098769',1024,'DVD','WN'),('1244108769',1024,'DVD','WN'),('1244118769',1024,'DVD','WN'),('1244128769',1025,'DVD','D'),('1244138769',1025,'DVD','D'),('1244148769',1025,'DVD','D'),('1244158769',1025,'Blu-ray','D'),('1244168769',1026,'DVD','WL'),('1244178769',1026,'DVD','WL'),('1244188769',1026,'DVD','WL');
/*!40000 ALTER TABLE `copies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `customerNum` int(11) NOT NULL DEFAULT '0',
  `givenName` varchar(20) NOT NULL,
  `familyName` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phoneNum` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`customerNum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (10001,'Brigitte','Wolfs','82 Alpha St Taringa','0413486335'),(10002,'Christopher','Khaleyeva','105 Rose Tce, Toowong','0417344003'),(10003,'B J','Arsenault','88 Gregory Tce Spring Hill','0412410101'),(10004,'Lindsay','Beard','11 Byth St South Brisbane','0419420929'),(10005,'Brooke','Bedford','67 Duncan St West End','0411830492'),(10006,'Kim','Benko','22 Vulture St West End','0411223344'),(10007,'Pat','Bennet','60 Young St Perie','0408843934'),(10008,'Chad','Black','12 Panoraqmic Drive, Narangba','0413484848'),(10009,'Maddy','Calhoun','5 Rose Tce, Toowong','0417848484'),(10010,'Ian','Carvin','26 Logan Rd, Eight Mile Plains',''),(10011,'Josh','Crippen','7 Orion Crt, Springwood','0419192929'),(10012,'Tom','Crocker','134 Gaynesford St, Holand Park West','0411238833'),(10013,'Nate','Davis','196 Gladstone Rd, Dutton Park','0410237833'),(10014,'Anthony','Dolan','116 Klumpp Rd, Upper Mount Gravatt','0408322320'),(10015,'Scott','Dusing','266 Stafford Rd, Stafford','0413200129'),(10016,'Gary','Ervin','97 Long St, Graceville','0417129827'),(10017,'Tommy','Goldblatt Jr','577 Lutwyche Rd, Lutwyche','0412832990'),(10018,'Misty','Hall','17 Akaove Ave, Geebung','0419233939'),(10019,'Klete','Hannan','567 D\'Arcy Rd, Corina',''),(10020,'Kristy','Hyman','54 Norman Drv, Chermside','0408322321'),(10021,'Lenny','Keller','57 Deslie St, Cannon Hill','0408103983'),(10022,'Jason','Kowal','33 Moolinga St, Jindalee','0413949494'),(10023,'Tom','Krayzelburg','133 Gladstone Rd, Highgate Hill','0417034030'),(10024,'Ed','Lezak','18 Sandgate Rd, Breakfast Creek','0412219283'),(10025,'Diana','Malchow','2 Dunbar St, Margate','0419390202'),(10026,'Rada','Moses','20 Leckie Rd, Kedron','0411282882'),(10027,'Aaron','Munz','40 Lang Pde, Aucheflower','0408421020'),(10028,'Michael','Owen','61 Kempster St, Sandgate','0408843935'),(10029,'Erin','Peirsol','268 Stafford Rd, Stafford','0413303098'),(10030,'Megan','Phelps','27 Brown St, Bardon','0417101010');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `movieNum` int(11) NOT NULL DEFAULT '0',
  `title` varchar(200) NOT NULL,
  `yearReleased` int(11) NOT NULL,
  PRIMARY KEY (`movieNum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1000,'The Bourne Identity',2002),(1001,'Mr Deeds',2002),(1002,'Road To Perdition',2002),(1003,'The Nugget',2002),(1004,'Kissing Jessica Stein',2002),(1005,'The Guru',2003),(1006,'The Nutty Professor',1963),(1007,'The Thomas Crown Affair',1968),(1008,'Stars Wars - Episode II, Attack of the Clones',2002),(1009,'Rainbow Brite and the Star Stealer',1985),(1010,'The Nutty Professor',1996),(1011,'The Evening Star',1996),(1012,'Moulin Rouge',2001),(1013,'The Others',2001),(1014,'Eyes Wide Shut',1999),(1015,'Braveheart',1995),(1016,'Sign',2002),(1017,'The Year of Living Dangerously',1983),(1018,'Mad Max',1979),(1019,'Mad Max Beyond Thunderdome',1985),(1020,'The Thomas Crown Affair',1999),(1021,'Man of Steel',2013),(1022,'We\'re the Millers',2013),(1023,'Fast & Furios 6',2013),(1024,'Gone Girl',2014),(1025,'Hercules',2014),(1026,'Maleficent',2014),(1027,'The Nutty Professor',2008);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rentalrates`
--

DROP TABLE IF EXISTS `rentalrates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rentalrates` (
  `rentalCode` varchar(3) NOT NULL DEFAULT '',
  `rentalPeriod` varchar(20) NOT NULL,
  `rate` decimal(3,2) NOT NULL,
  PRIMARY KEY (`rentalCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentalrates`
--

LOCK TABLES `rentalrates` WRITE;
/*!40000 ALTER TABLE `rentalrates` DISABLE KEYS */;
INSERT INTO `rentalrates` VALUES ('D','Daily',6.00),('WL','Weekly - low rate',3.50),('WN','Weekly - normal rate',5.00);
/*!40000 ALTER TABLE `rentalrates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rentals`
--

DROP TABLE IF EXISTS `rentals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rentals` (
  `customerNum` int(11) NOT NULL DEFAULT '0',
  `barcode` varchar(10) NOT NULL,
  `dateDue` date NOT NULL,
  `dateReturned` date DEFAULT NULL,
  PRIMARY KEY (`customerNum`,`barcode`),
  KEY `barcode` (`barcode`),
  CONSTRAINT `rentals_ibfk_1` FOREIGN KEY (`customerNum`) REFERENCES `customers` (`customerNum`),
  CONSTRAINT `rentals_ibfk_2` FOREIGN KEY (`barcode`) REFERENCES `copies` (`barcode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentals`
--

LOCK TABLES `rentals` WRITE;
/*!40000 ALTER TABLE `rentals` DISABLE KEYS */;
INSERT INTO `rentals` VALUES (10001,'1240028769','2015-06-02','2015-06-02'),(10002,'1243118769','2015-08-20',NULL),(10003,'1240078769','2015-08-20','2015-07-04'),(10004,'1240138769','2015-08-07','2015-08-07'),(10005,'1240198769','2015-08-21',NULL),(10006,'1240298769','2015-08-11','2015-08-09'),(10007,'1240378769','2015-07-13','2015-07-13'),(10008,'1240438769','2015-06-17','2015-06-14'),(10008,'1241278769','2015-06-17','2015-06-14'),(10008,'1244128769','2015-06-17','2015-06-14'),(10009,'1240538769','2015-08-21',NULL),(10010,'1240618769','2015-06-19','2015-06-19'),(10011,'1240718769','2015-07-23','2015-07-19'),(10012,'1240798769','2015-08-02','2015-08-02'),(10013,'1240898769','2015-08-04','2015-08-01'),(10014,'1241018769','2015-08-22',NULL),(10015,'1241078769','2015-07-06','2015-07-06'),(10016,'1241138769','2015-06-08','2015-06-02'),(10017,'1241318769','2015-06-10','2015-06-10'),(10018,'1241398769','2015-07-12','2015-07-05'),(10019,'1241518769','2015-08-14','2015-08-14'),(10020,'1241638769','2015-08-22',NULL),(10020,'1244038769','2015-08-22',NULL),(10021,'1241738769','2015-08-16','2015-08-15'),(10022,'1241818769','2015-07-18','2015-07-18'),(10023,'1241938769','2015-06-20','2015-06-18'),(10023,'1242298769','2015-08-03','2015-08-02');
/*!40000 ALTER TABLE `rentals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stars`
--

DROP TABLE IF EXISTS `stars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stars` (
  `starID` int(11) NOT NULL DEFAULT '0',
  `givenName` varchar(20) NOT NULL,
  `familyName` varchar(20) NOT NULL,
  PRIMARY KEY (`starID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stars`
--

LOCK TABLES `stars` WRITE;
/*!40000 ALTER TABLE `stars` DISABLE KEYS */;
INSERT INTO `stars` VALUES (100,'Matt','Dammon'),(101,'Franka','Polente'),(102,'Adam','Sandler'),(103,'Winona','Ryder'),(104,'John','Turturro'),(105,'Tom','Hanks'),(106,'Paul','Newman'),(107,'Jude','Law'),(108,'Eric','Bana'),(109,'Stephen','Curry'),(110,'Dave','O\'Neil'),(111,'Belinda','Emmett'),(112,'Vince','Colosimo'),(113,'Peter','Moon'),(114,'Chris','Haywood'),(115,'Max','Cullen'),(116,'Jennifer','Westfeldt'),(117,'Heather','Juergensen'),(118,'Scott','Cohen'),(119,'Jackie','Hoffman'),(120,'Henry','Cavill'),(121,'Amy','Adams'),(122,'Jason','Sudeikis'),(123,'Jennifer','Aniston'),(124,'Emma','Roberts'),(125,'Vin','Diesel'),(126,'Paul','Walker'),(127,'Ben','Affleck'),(128,'Rosamund','Pike'),(129,'Dwayne','Johnson'),(130,'John','Hurt'),(131,'Angelina','Jolie'),(132,'Elle','Fanning');
/*!40000 ALTER TABLE `stars` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-08-28 18:21:34
