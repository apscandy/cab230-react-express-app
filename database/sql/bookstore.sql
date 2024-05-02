DROP DATABASE IF EXISTS `bookstore`;
CREATE DATABASE IF NOT EXISTS `bookstore`;
USE `bookstore`;

# Table structure for table `author`
DROP TABLE IF EXISTS `author`;
CREATE TABLE `author` (
  `authorID` int(11) NOT NULL,
  `firstName` varchar(60) DEFAULT NULL,
  `lastName` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`authorID`)
);
INSERT INTO `author` VALUES (1,'Sansa','Stark'),(2,'Stephen','King'),(3,'Prakash','Bhandari'),(4,'Laurianne','Sitbon'),(5,'Sophie','Monk'),(6,'George','Costanza'),(7,'Nikki','Peever'),(8,'Amanda','Jarvinen'),(9,'Jake','Bradford'),(10,'Wayne','Wood'),(11,'Sam','Roy'),(12,'Ned','Stark');

# Table structure for table `publisher`
DROP TABLE IF EXISTS `publisher`;
CREATE TABLE `publisher` (
  `publisherCode` int(11) NOT NULL,
  `publisherName` varchar(60) NOT NULL,
  `publisherCity` varchar(60) DEFAULT NULL,
  `publisherState` enum('QLD','VIC','NSW','WA','TAS','NT','SA') NOT NULL,
  PRIMARY KEY (`publisherCode`)
);
INSERT INTO `publisher` VALUES (1,'Publishing House','Perth','WA'),(2,'Storm Pty Ltd','Melbourne','VIC'),(3,'Rooster House','Sydney','NSW'),(4,'Rainforest Publishing','Hobart','TAS'),(5,'Cavill Press','Gold Coast','QLD'),(6,'South Publishing','Adelaide','SA'),(7,'James Bond','Gold Coast','QLD');

# Table structure for table `branch`
DROP TABLE IF EXISTS `branch`;
CREATE TABLE `branch` (
  `branchNumber` int(11) NOT NULL AUTO_INCREMENT,
  `branchName` varchar(60) DEFAULT NULL,
  `streetNo` varchar(15) DEFAULT NULL,
  `streetName` varchar(30) DEFAULT NULL,
  `branchCity` varchar(60) DEFAULT NULL,
  `branchState` enum('QLD','VIC','NSW','WA','TAS','NT','SA') NOT NULL,
  `numberEmployees` int(11) DEFAULT NULL,
  PRIMARY KEY (`branchNumber`)
);
INSERT INTO `branch` VALUES (1,'QUT Bookstore','123','Fake Street','Brisbane','QLD',5),(2,'Pick-a-book','Level 40, 200','Martin Place','Sydney','NSW',10),(3,'Paging all Readers','4300','Brunswick Street','Melbourne','VIC',10),(4,'Books by the Ocean','20','Jane Street','Hobart','TAS',3),(5,'Look Inna Book','600','Lake View','Darwin','NT',3),(6,'Rad-elaide Books','100','North Street','Adelaide','SA',4),(7,'South Perth Books','Level 4, 500','Wilston Avenue','Perth','WA',7),(8,'Once Upon A Bookstore','3A/700','The Strand Road','Townsville','QLD',8),(9,'Bookmark Joe\'s','1','Red Road','Ayers Rock','NT',4),(10,'North Perth books','762','Western Road','Perth','WA',3);

# Table structure for table `book`
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `ISBN` char(13) NOT NULL,
  `title` varchar(60) NOT NULL,
  `publisherCode` int(11) NOT NULL,
  `genre` enum('Non-Fiction','Science Fiction','Fantasy','Crime','Mystery','Young Adult','Romance','General Fiction') DEFAULT NULL,
  `retailPrice` decimal(6,2) DEFAULT NULL,
  `paperback` enum('True','False') NOT NULL,
  PRIMARY KEY (`ISBN`),
  KEY `publisherCode` (`publisherCode`),
  CONSTRAINT `publisherCode` FOREIGN KEY (`publisherCode`) REFERENCES `publisher` (`publisherCode`)
);
INSERT INTO `book` VALUES ('0000000000001','True Crime',1,'Crime',54.95,'True'),('0099886674850','The Neverending Story',1,'Fantasy',215.80,'False'),('1234567890123','MySQL 101',1,'Non-Fiction',10.70,'True'),('1236739872348','Teenage Mutant Ninja Turtles',5,'General Fiction',12.00,'False'),('1265763422222','The Bachelorette',6,'Romance',1.50,'True'),('2847563928012','Game of Thrones',2,'General Fiction',70.95,'True'),('3467802389345','A Clockwork Orange',2,'General Fiction',80.75,'True'),('4440987653789','Ghostrider',2,'Mystery',30.95,'True'),('4455667788990','Steven Avery - guilty or innocent?',3,'Crime',50.00,'True'),('4568777220982','The Habibs',4,'General Fiction',13.95,'True'),('6373242890234','American Horror Story',2,'Non-Fiction',90.80,'False'),('6543780976790','Arrow',3,'Young Adult',10.95,'True'),('9999999999999','Stranger Things 2',7,'Science Fiction',100.50,'False');

# Table structure for table `inventory`
DROP TABLE IF EXISTS `inventory`;
CREATE TABLE `inventory` (
  `ISBN` char(13) NOT NULL,
  `branchNumber` int(11) NOT NULL,
  `quantityInStock` int(11) DEFAULT '0',
  PRIMARY KEY (`ISBN`, `branchNumber`),
  CONSTRAINT `branchNumber` FOREIGN KEY (`branchNumber`) REFERENCES `branch` (`branchNumber`),
  CONSTRAINT `inventoryISBN` FOREIGN KEY (`ISBN`) REFERENCES `book` (`ISBN`)
);
INSERT INTO `inventory` VALUES ('0099886674850',1,1),('0099886674850',2,1),('0099886674850',3,4),('0099886674850',4,3),('0099886674850',5,2),('0099886674850',6,7),('0099886674850',7,3),('0099886674850',8,5),('0099886674850',9,0),('0099886674850',10,0),('1234567890123',1,8),('1234567890123',2,0),('1234567890123',3,6),('1234567890123',4,2),('1234567890123',5,3),('1234567890123',6,5),('1234567890123',7,4),('1234567890123',8,2),('1234567890123',9,4),('1234567890123',10,6),('1236739872348',1,1),('1236739872348',2,2),('1236739872348',3,0),('1236739872348',4,1),('1236739872348',5,8),('1236739872348',6,6),('1236739872348',7,4),('1236739872348',8,3),('1236739872348',9,2),('1236739872348',10,7),('1265763422222',1,5),('1265763422222',2,3),('1265763422222',3,4),('1265763422222',4,0),('1265763422222',5,0),('1265763422222',6,1),('1265763422222',7,3),('1265763422222',8,3),('1265763422222',9,1),('1265763422222',10,2),('2847563928012',1,8),('2847563928012',2,0),('2847563928012',3,3),('2847563928012',4,4),('2847563928012',5,5),('2847563928012',6,3),('2847563928012',7,0),('2847563928012',8,4),('2847563928012',9,7),('2847563928012',10,0),('3467802389345',1,9),('3467802389345',2,7),('3467802389345',3,2),('3467802389345',4,1),('3467802389345',5,8),('3467802389345',6,0),('3467802389345',7,4),('3467802389345',8,8),('3467802389345',9,5),('3467802389345',10,6),('4440987653789',1,4),('4440987653789',2,1),('4440987653789',3,0),('4440987653789',4,0),('4440987653789',5,3),('4440987653789',6,2),('4440987653789',7,7),('4440987653789',8,0),('4440987653789',9,7),('4440987653789',10,2),('4455667788990',1,2),('4455667788990',2,1),('4455667788990',3,1),('4455667788990',4,2),('4455667788990',5,3),('4455667788990',6,0),('4455667788990',7,0),('4455667788990',8,1),('4455667788990',9,3),('4455667788990',10,2),('4568777220982',1,6),('4568777220982',2,4),('4568777220982',3,3),('4568777220982',4,2),('4568777220982',5,1),('4568777220982',6,5),('4568777220982',7,2),('4568777220982',8,3),('4568777220982',9,4),('4568777220982',10,3),('6373242890234',1,6),('6373242890234',2,1),('6373242890234',3,5),('6373242890234',4,3),('6373242890234',5,4),('6373242890234',6,4),('6373242890234',7,3),('6373242890234',8,6),('6373242890234',9,4),('6373242890234',10,5),('6543780976790',1,0),('6543780976790',2,2),('6543780976790',3,2),('6543780976790',4,4),('6543780976790',5,5),('6543780976790',6,1),('6543780976790',7,3),('6543780976790',8,1),('6543780976790',9,2),('6543780976790',10,1),('9999999999999',1,0),('9999999999999',2,0),('9999999999999',3,0),('9999999999999',4,0),('9999999999999',5,0),('9999999999999',6,0),('9999999999999',7,0),('9999999999999',8,0),('9999999999999',9,0),('9999999999999',10,0);

# Table structure for table `wrote`
DROP TABLE IF EXISTS `wrote`;
CREATE TABLE `wrote` (
  `ISBN` char(13) NOT NULL,
  `authorID` int(11) NOT NULL,
  `sequenceNumber` int(11) DEFAULT NULL,
  PRIMARY KEY (`ISBN`, `authorID`),
  CONSTRAINT `ISBN` FOREIGN KEY (`ISBN`) REFERENCES `book` (`ISBN`),
  CONSTRAINT `authorID` FOREIGN KEY (`authorID`) REFERENCES `author` (`authorID`)
);
INSERT INTO `wrote` VALUES ('0000000000001',10,1),('0099886674850',7,1),('1234567890123',4,1),('1236739872348',6,1),('1265763422222',5,1),('2847563928012',9,1),('4440987653789',11,1),('4455667788990',12,1),('4568777220982',7,1),('6543780976790',6,1),('9999999999999',7,1),('1234567890123',3,2),('1234567890123',8,3),('2847563928012',12,2),('2847563928012',1,3),('6373242890234',9,1),('6373242890234',8,2),('6373242890234',12,3),('3467802389345',8,2),('3467802389345',12,3),('3467802389345',9,1);