
FOR THE SET UP OF PROJECT, PLEASE FOLLOW THE SET UP GUIDE 

-----------------------------------------------------------------------

Befor starting the project set up, make sure you have properly installed the below softwares:
1) Java JDK 17 or above version
2) STS (STS 4 recommended)
3) Node JS
4) Vs Code
5) MySQL Server and MySQL WorkBench (use can also use Command prompt for Data Querying, But I recommend to use Workbench)

-----------------------------------------------------------------------

As shown on , For running frontend we have to use [npm start] command.

1) After hitting [npm start] command, when we get [Error: cannot find module react], 

so in that case, please hit below command.

npm install --save react react-dom @types/react @types/react-dom

and after hitting the above command, you can hit the command [npm start] and now this time it will work fine.

2) Sometime we can also get below error:

react-scripts' is not recognized as an internal or external command

so in this case hit below command firstly, then again hit [npm start] command.

npm install react-scripts --save

-----------------------------------------------------------------------

MYSQL FAQs:

Do I need to create database and table manually?

NO, you don't have to create the Database and Tables manually in the MySQL Server. When you run the backend application for the first time it automatically
creates the Database and Tables in the MySQL server.

You just have to enter the correct mysql password in application.properties file and make sure MySQL Server is properly installed in your system.


-----------------------------------------------------------------------

AFTER SET UP PROCESS

Now if your set up is done and both backend and frontend is running fine.

NOTE: In your system, you'll not be able to see all the Data as shown  because you have just executed the project in your system
and there is no data present in your database.

So don't get tensed.

You simply have to follow my code, where I have shown each and every functionalities of the project, so just follow  code snippet that and try to perform all the
functionalities as shown in my  , you'll also get familiar about the project.

ADMIN CREDENTIAL:     (this is harded coded, check main class)

Email Id: demo.admin@demo.com
Password: 123456


And Lastly, Go through the Code and try to understand the Code, it will help alot:)

-----------------------------------------------------------------------

                      *********** THANK YOU ***********
