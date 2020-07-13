var playerTurn;
var box1;
var counterClicked;
var boxes_ar;
var user=[];
var user_is_registered;
var cnt_x;
var_cnt_y;


function init()
{
  createBoxes();
  full_resetGame();
  id_reset_btn.onclick=full_resetGame;
  user_flag=false;
  cnt_x=cnt_y=0;
}

function writeHumanName()
{
  // Array of my players
  for (var i = 0; i < 2; i++)
 {
  var humanName = document.getElementById("fName"+[i]).value;
  document.getElementById("user"+[i]).innerHTML =  humanName + " !!!" + " player No."+[i+1];
  user[i]=humanName;
  user_is_registered=true;
  document.getElementById("fName"+[i]).value="";
  }
}

function full_resetGame()
{
  document.getElementById("user"+[0]).innerHTML="";
  document.getElementById("user"+[1]).innerHTML="";
  user_is_registered=false;
  cnt_x=0;
  cnt_y=0;
  restartGame();
}

function restartGame()
{
    playerTurn=user0;
    counterClicked=0;
    if(cnt_x>0 || cnt_y>0)
    {
      document.getElementById("user"+[1]).innerHTML=user[1]+" total wins " +cnt_y;
      document.getElementById("user"+[0]).innerHTML=user[0]+" total wins " +cnt_x;
    }
    for (var i=0;i<boxes_ar.length;i++)
    {
        boxes_ar[i].resetBox();
    }
}

function createBoxes()
{
    boxes_ar=[];
    for (var i=0;i<9;i++)
    {
        var box = new Box(i);
        boxes_ar.push(box);
    }
}

function Box(_id)
{
        this.x_image="_images/x.jpg";
        this.o_image="_images/o.jpg";
        this.id=_id;
        this.figure=_id;
    
        var all_obj = this;
        var beenClicked = false;

        this.resetBox=function resetBox()
        {
            box_img.src="";
            beenClicked=false;
            all_obj.figure="";
        }
        
        var newDiv = document.createElement("div");
        newDiv.className = "box";
        id_blocks.appendChild(newDiv);
        //newDiv.innerHTML+=this.id;

        var box_img = document.createElement("img");
        box_img.src="";
        newDiv.appendChild(box_img);
        
        newDiv.onclick = function()
        {
            if(beenClicked == false)
              {
              if(user_is_registered==true)
                {       

                if (playerTurn==user0)
                {
                box_img.src=all_obj.x_image;
                playerTurn=user1;
                beenClicked=true;
                counterClicked++;
                all_obj.figure="x";
                }
                else
                {
                box_img.src=all_obj.o_image;
                playerTurn=user0;
                beenClicked=true;
                counterClicked++;
                all_obj.figure="o";
                }
                
                checkWinCombo();

                } else alert("Pls select new players names!!!");

                if (counterClicked>=9)
                {
                    alert("Game over");
                } 
              }
        }       
}

function checkWinCombo()
{
  var whoWin; 
  if((boxes_ar[2].figure==boxes_ar[0].figure) && (boxes_ar[1].figure==boxes_ar[2].figure) && (boxes_ar[1].figure==boxes_ar[0].figure)) 
   {
    whoWin=boxes_ar[2].figure;
   }
  if((boxes_ar[2].figure==boxes_ar[0].figure) && (boxes_ar[1].figure==boxes_ar[2].figure) && (boxes_ar[1].figure==boxes_ar[0].figure)) 
   {
     whoWin=boxes_ar[2].figure;
   }
  if((boxes_ar[5].figure==boxes_ar[4].figure) && (boxes_ar[5].figure==boxes_ar[3].figure) && (boxes_ar[4].figure===boxes_ar[3].figure)) 
   {
     whoWin=boxes_ar[5].figure;
  }
  if((boxes_ar[6].figure==boxes_ar[7].figure) && (boxes_ar[6].figure==boxes_ar[8].figure) && (boxes_ar[7].figure==boxes_ar[8].figure)) 
  {
    whoWin=boxes_ar[6].figure;
  }
  if((boxes_ar[0].figure==boxes_ar[3].figure) && (boxes_ar[0].figure==boxes_ar[6].figure) && (boxes_ar[3].figure==boxes_ar[6].figure)) 
  {
    whoWin=boxes_ar[0].figure;
  }
  if((boxes_ar[1].figure==boxes_ar[4].figure) && (boxes_ar[1].figure==boxes_ar[7].figure) && (boxes_ar[4].figure==boxes_ar[7].figure)) 
  {
    whoWin=boxes_ar[1].figure;
  }
  if((boxes_ar[2].figure==boxes_ar[5].figure) && (boxes_ar[2].figure==boxes_ar[8].figure) && (boxes_ar[5].figure==boxes_ar[8].figure)) 
  {
    whoWin=boxes_ar[2].figure;
  }
  if((boxes_ar[0].figure==boxes_ar[4].figure) && (boxes_ar[0].figure==boxes_ar[8].figure) && (boxes_ar[4].figure==boxes_ar[8].figure)) 
  {
    whoWin=boxes_ar[0].figure;
  }
  if((boxes_ar[2].figure==boxes_ar[4].figure) && (boxes_ar[2].figure==boxes_ar[6].figure) && (boxes_ar[4].figure==boxes_ar[6].figure)) 
  {
    whoWin=boxes_ar[2].figure;
  }
  
  if (whoWin =="o")
  {
      alert("Player 2 !!! " + user[1] + " is the winner !!!");
      cnt_y++;
      restartGame();
  }
  else if (whoWin =="x")
  {
      alert("Player 1 !!! " + user[0] + " is the winner !!!");
      cnt_x++;
      restartGame();
  }
}