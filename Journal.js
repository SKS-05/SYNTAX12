*{
    box-sizing: border-box;
  }
  body{
    background-image: url("https://images.pexels.com/photos/606539/pexels-photo-606539.jpeg?cs=srgb&dl=pexels-jessica-lewis-606539.jpg&fm=jpg");
    background-image: no-repeat;
    background-size: cover;
  }
  .container{
    padding: 10px;
    /* background-color: red; */
    max-width: fit-content;
    margin:50px auto;
  }
  .btn{
    border:none;
    padding: 7px 15px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn-add{
    background: rgba(95, 20, 20, 0.365);
    color:white;
  
  }
  
  .addContainer{
    position: absolute;
    background-color: rgba(0,0,0,0.2);
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .addContainer form{
    width: 420px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 50px 40px;
    box-shadow:5px 5px 10px rgba(0,0,0,0.2) ;
    border-radius: 5px;
  }
  .addContainer form label{
    font-size: 18px;
  }
  .addContainer form input{
    font-size: 18px;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .addContainer form button{
    background-color: rgba(95, 20, 20, 0.365);
    color:white;
    font-weight: 500;
    margin-top: 20px;
  }
  .addContainer form .close-btn{
    margin-left: auto;
    font-size: 18px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border:1px solid #000;
    cursor: pointer;
  }
  
  .tableContainer{
    margin-top: 50px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    border-radius: 5px;
  }
  
  .tableContainer table thead tr{
    background-color: #171616;
    
  }
  .tableContainer table thead tr th,
  .tableContainer table tbody tr td{
    min-width: 200px;
    padding: 7px;
    text-align: center;
    background-color: #f0e9e9;
  }
  .tableContainer table tbody tr{
    border : 1px solid rgb(16, 16, 16);
  }
  .tableContainer table tbody tr td{
    border-bottom: 1px solid rgb(20, 19, 19);
  }
  .btn-edit,
  .btn-delete{
    font-size: 16px;
    padding: 5px 10px;
    margin:0px 10px;
  }
  .btn-edit{
    background-color:bisque;
  }
  .btn-delete{
    background-color: bisque;
    
  }