$(document).ready(function(){
  const words = ["Acne","Acre","Advertise","Aircraft","Aisle","Alligator","Alphabetize","America","Ankle","Applause","Applesauce","Application","Archaeologist","Aristocrat","Arm","Asleep","Astronaut","Athlete","Atlantis","Aunt","Avocado","Backbone","Bag","Baguette","Bald","Balloon","Banana","Baseball","Baseboards","Basketball","Bat","Battery","Beach","Beanstalk","Bedbug","Beer","Beethoven","Belt","Bib","Bicycle","Big","Bike","Billboard","Bird","Birthday","Bite","Blacksmith","Blanket","Bleach","Blimp","Blossom","Blueprint","Blunt","Blur","Boa","Boat","Bob","Bobsled","Body","Bomb","Bonnet","Book","Booth","Bowtie","Box","Boy","Brainstorm","Brand","Brave","Bride","Bridge","Broccoli","Broken","Broom","Bruise","Brunette","Bubble","Buddy","Buffalo","Bulb","Bunny","Bus","Buy","Cabin","Cafeteria","Cake","Calculator","Campsite","Can","Canada","Candle","Candy","Cape","Capitalism","Car","Cardboard","Cartography","Cat","Cd","Ceiling","Cell","Century","Chair","Chalk","Champion","Charger","Cheerleader","Chef","Chess","Chew","Chicken","Chime","China","Chocolate","Church","Circus","Clay","Cliff","Cloak","Clockwork","Clown","Clue","Coach","Coal","Coaster","Cog","Cold","College","Comfort","Computer","Cone","Constrictor","Conversation","Cook","Coop","Cord","Cough","Cow","Cowboy","Crayon","Cream","Crisp","Crow","Cruise","Crumb","Crust","Cuff","Curtain","Czar","Dad","Dart","Dawn","Day","Deep","Defect","Dent","Dentist","Desk","Dictionary","Dimple","Dirty","Dismantle","Ditch","Diver","Doctor","Dog","Doghouse","Doll","Dominoes","Door","Dot","Drain","Draw","Dream","Dress","Drink","Drip","Drums","Dryer","Duck","Dump","Dunk","Dust","Ear","Eat","Ebony","Elbow","Electricity","Elephant","Elevator","Elf","Engine","England","Escalator","Europe","Evolution","Extension","Eyebrow","Fan","Fancy","Fast","Feast","Fence","Fiddle","Figment","Finger","Fire","First","Fishing","Fix","Fizz","Flagpole","Flannel","Flashlight","Flock","Flotsam","Flower","Flu","Flush","Flutter","Fog","Foil","Football","Forehead","Forever","France","Freckle","Freight","Fringe","Frog","Frown","Gallop","Game","Garbage","Garden","Gasoline","Gem","Ginger","Gingerbread","Girl","Glasses","Goblin","Gold","Goodbye","Grandpa","Grape","Grass","Gratitude","Gray","Green","Guitar","Gum","Gumball","Hair","Half","Handle","Handwriting","Hang","Happy","Hat","Hatch","Headache","Heart","Hedge","Helicopter","Hem","Hide","Hill","Hockey","Homework","Honk","Hopscotch","Horse","Hose","Hot","House","Houseboat","Hug","Humidifier","Hungry","Hurdle","Hurt","Hut","Ice","Inn","Intern","Internet","Invitation","Ironic","Ivory","Ivy","Jade","Japan","Jeans","Jelly","Jet","Jig","Jog","Journal","Jump","Key","Killer","Kilogram","King","Kitchen","Kite","Knee","Kneel","Knife","Knight","Koala","Lace","Ladder","Ladybug","Lag","Landfill","Lap","Laugh","Laundry","Law","Lawn","Leak","Leg","Letter","Level","Lifestyle","Light","Lightsaber","Lime","Lion","Lizard","Log","Loiterer","Lollipop","Loyalty","Lunch","Lyrics","Machine","Macho","Mailbox","Mammoth","Mascot","Mast","Matchstick","Mate","Mattress","Mess","Mexico","Mine","Mistake","Modern","Mold","Mom","Monday","Money","Monitor","Monster","Moon","Mop","Moth","Motorcycle","Mountain","Mouse","Mud","Music","Mute","Nature","Negotiate","Neighbor","Nest","Niece","Night","Nightmare","Nose","Oar","Observatory","Office","Oil","Old","Olympian","Opaque","Orbit","Organ","Organize","Outer","Outside","Pail","Paint","Pajamas","Palace","Pants","Paper","Paper","Park","Parody","Party","Password","Pastry","Pawn","Pear","Pen","Pencil","Pendulum","Penis","Penny","Pepper","Personal","Philosopher","Phone","Photograph","Piano","Picnic","Pigpen","Pillow","Pilot","Pinch","Ping","Pinwheel","Pirate","Plaid","Plan","Plank","Plate","Platypus","Playground","Plow","Plumber","Pocket","Poem","Point","Pole","Pong","Pool","Popsicle","Population","Portfolio","Positive","Post","Princess","Procrastinate","Publisher","Punk","Puppet","Puppy","Push","Puzzle","Quarantine","Queen","Quicksand","Quiet","Race","Radio","Raft","Rag","Rainbow","Rainwater","Random","Ray","Recycle","Red","Regret","Reimbursement","Retaliate","Rib","Riddle","Rim","Room","Rose","Round","Roundabout","Rung","Runt","Rut","Sad","Safe","Salmon","Salt","Sandbox","Sandcastle","Sandwich","Sash","Satellite","Scar","Scared","School","Scoundrel","Scramble","Scuff","Seashell","Season","Sentence","Sequins","Set","Shaft","Shallow","Shampoo","Shark","Sheep","Sheets","Sheriff","Shipwreck","Shirt","Shoelace","Short","Shower","Shrink","Sick","Siesta","Silhouette","Singer","Sip","Skate","Skating","Ski","Slam","Sleep","Sling","Slow","Slump","Smith","Sneeze","Snow","Snuggle","Song","Space","Spare","Speakers","Spider","Spit","Sponge","Spool","Spoon","Spring","Sprinkler","Spy","Square","Squint","Stairs","Standing","Star","State","Stick","Stockholder","Stoplight","Stout","Stove","Stowaway","Straw","Stream","Stripe","Student","Sun","Sunburn","Sushi","Swamp","Swarm","Sweater","Swimming","Swing","Talk","Taxi","Teacher","Teapot","Teenager","Telephone","Tennis","Thief","Think","Throne","Through","Thunder","Tide","Tiger","Time","Tiptoe","Tired","Tissue","Toast","Toilet","Tool","Toothbrush","Tornado","Tournament","Tractor","Train","Trash","Treasure","Tree","Triangle","Trip","Truck","Tub","Tuba","Tutor","Television","Twig","Type","Unemployed","Upgrade","Vest","Vision","Wag","Water","Watermelon","Wax","Wedding","Weed","Wheelchair","Whiplash","Whisk","Whistle","White","Wig","Will","Windmill","Winter","Wish","Wolf","Wool","World","Worm","Wristwatch","Yardstick","Zipper","Zone","Zoo"];
  let startGame = () => {
    $(".cards").removeClass("red").removeClass("blue").removeClass("civilian").removeClass("spy").removeClass("chosen-card").removeClass("chosen");
    let selectedCard, countdown = null;
    let chosenWords = [];
    while (chosenWords.length < 25){
      let index = Math.floor(Math.random() * words.length-1)
      if(chosenWords.indexOf(words[index]) === -1){
        chosenWords.push(words[index])
      }
    };
    for(let i = 0; i < 25; i++){
      $(".cards")[i].innerHTML = "<strong>"+chosenWords[i]+"</strong>";
    };
  };

  startGame();

  $(".new-game").click(function(){location.reload()});

  $(".chosen").click(function(e){
    e.preventDefault;
  });

  $(".cards").click(function(){
    // if ($(this).attr("class").includes("chosen")){
    //   console.log("This card has already been flipped.");
    // } else {
      $(".chosen-card").removeClass("chosen-card");
      $(this).addClass("chosen-card");
      selectedCard = $(this);
      $("#color-chooser").show();

      let x=event.screenX+20;
      let y=event.screenY-125;
      
      $("#color-chooser").css("left", x+"px");
      $("#color-chooser").css("top", y+"px");
    // };
  });

  $(".color-block").click(function(){
    $("#color-chooser").hide();
    selectedCard.removeClass("spy").removeClass("red").removeClass("blue").removeClass("civilian").addClass($(this).attr("class").split(" ")[1]).addClass("chosen");
  });
  $(".close-color").click(function(){
    $("#color-chooser").hide();
    $(".chosen-card").removeClass("chosen-card");
  });

  let timerRunning = false;

  $(".start-time").click(function(){
    if (!timerRunning){
      timerRunning = true;
      $("#time").html(30);
      countdown = setInterval(function() {
        if (parseInt($("#time").html()) > 0){
          $("#time").html( parseInt($("#time").html()) - 1);
        };
        if (parseInt($("#time").html()) <= 10){
          $("#time").css("color","#dc3545");
        };
      },1000);
    }
  });
  $(".reset-time").click(function(){
    clearInterval(countdown);
    timerRunning = false;
    $("#time").html("--").css("color","black");
  });
});
