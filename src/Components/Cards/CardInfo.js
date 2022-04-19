import SS_HoWapp from '../Images/portfolio_SS/SS_HoWapp.png';
import SS_google_books_search from '../Images/portfolio_SS/SS_google_books_search.png';
import SS_U_Connect_App from '../Images/portfolio_SS/SS_U_Connect_App.png';
import SS_weatherDashboard from '../Images/portfolio_SS/SS_weatherDashboard.png';
import SS_workdayScheduler from '../Images/portfolio_SS/SS_workdayScheduler.png';

const CardInfo = [
  {
    title: "Hall of Whispers",
    description: "This application is a collaborative React project designed to allow users to connect with others and create Dungeons and Dragons style adventures. RESTful server requests and responses enable CRUD functionality saved in a Mongo Database. A persistent connection with websockets (in the form of websocket.io) allows users to communicate with one another through direct messages enabled via handshaking.",
    screenshot: SS_HoWapp,
    git_href: "https://github.com/alzcheng/HallofWhispers",
    deployed_href: "https://hallofwhispers.herokuapp.com/"
  },

  {
    title: "Google Book Search",
    description: "This is a MERN stack application that includes 2 pages. The first page is a list of saved books in the database, where the user can either view the books on Google Books or delete the books from the database. The second page is a search page, where the user can search for books using the Google Books API. The user can view the book on Google Books or save them to the database.",
    screenshot: SS_google_books_search,
    git_href: "https://github.com/alzcheng/google-books-search",
    deployed_href: "https://react-google-books-search-515.herokuapp.com/"
  },

  {
    title: "U-Connect App",
    description: "This is a marketplace for users to find, buy, and sell their connections to others for a price. The user must register into the marketplace.",
    screenshot: SS_U_Connect_App,
    git_href: "https://github.com/alzcheng/uConnect",
    deployed_href: "https://uconnect-myproj2.herokuapp.com/"
  },



  {
    title: "Weather Dashboard",
    description: "This application takes in the name of a city and outputs the current weather data and a 5 day forecast of that city.",
    screenshot: SS_weatherDashboard,
    git_href: "https://github.com/alzcheng/weatherDashboard",
    deployed_href: "https://alzcheng.github.io/weatherDashboard/"
  },


  {
    title: "Workday Scheduler",
    description: "This application color codes each of the time during the workday. It allows you to record what you had planned on doing for that time during that day and stores it in Local Storage.",
    screenshot: SS_workdayScheduler,
    git_href: "https://github.com/alzcheng/workdayScheduler",
    deployed_href: "https://alzcheng.github.io/workdayScheduler/"
  },

  // {
  //   title: ,
  //   description: ,
  //   screenshot: ,
  //   git_href: ,
  //   deployed_href:
  // },
];

export default CardInfo;  