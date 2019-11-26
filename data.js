
var appPromise = d3.csv("data-set.csv");
appPromise.then(
function(data)
        {
        //Put in here functions I need to call
        makeButtons(data);
        setButtons();
    
        }) 

var makeButtons = function(data)
{
    //filter the data so it's just states that exist
    console.log("about to start d3 alg")
    d3.select("#states")
    .append("button")
    .data(data)
    .enter()
    .append("button")
    .attr("class", "state-buttons")
    .text(function(d)
         {
        //console.log(d)
        return d.States;
        
    })
    .on("click", function(d)
      { console.log(d)
       //regionTable(d);  
      })
    console.log("finished d3 alg")
    
    
}


var regionTable = function(regions)
{
    d3.selectAll("#mainTable").remove();
     var rows = d3.select("#mainTable")
    .selectAll("tr")
    .data(data.regions)
    .enter()
    .append("tr");
    //how do I just generate a column of data, instead of a row?
}

/*
var setButtons = function(data)
{
  d3.select("#states").on("click",function(d)
    //having 'd' in function helps us grab onto something if we wanted to         
    {
        console.log("i draw the table")
     //This function is when we want to sort and we want to sort before we draw the new table
     sortNumberColumn(data, function(country)
               {
         return country.eu_amount;
     })
//This function draws the table
var makeTable = function(data)
{
   d3.selectAll("#mainTable tr").remove();
     var rows = d3.select("#mainTable")
    .selectAll("tr")
    .data(data)
    .enter()
    .append("tr");
    
    //These 3 addCol functions provide data to the table
    addCol(rows,function(data)
    {
        return data.member_state;
    })
    
    addCol(rows,function(data)
    {
        return data.type;
    }) 
    
    addCol(rows,function(data)
    {
        return data.eu_amount;
    })     
}

//This is a function to add columns
var addCol=function(rows, fcn)
    {
       rows.append("td").text(fcn);
    }

/*
var sortColumn = function(data,col,accessor)
{
        d3.select(col)
        .on("click",function()
    {
        data.sort(function(a,b) 
        { 
            return (accessor(a)-accessor(b));
        })
        makeTable(data);
    }
*/


 /*   
     makeTable(data)
      console.log("The table is drawn!")
    });
    
    d3.select("#basic").on("click",function(d)         
    {
        console.log("i draw the table")
     sortStringColumn(data, function(country)
               {
         return country.member_state;
     })
        
    makeTable(data)
      console.log("The table is drawn!")
    });
    
     d3.select("#type").on("click",function(d) 
    {
        console.log("i draw the table")
     sortStringColumn(data, function(country)
               {
         return country.type;
     })
        
    makeTable(data)
      console.log("The table is drawn!")
    });
    
}   

var sortNumberColumn = function(data,accessor)
{
    data.sort(function(a,b) 
        { 
            return (accessor(a)-accessor(b));
        })
   
}

var sortStringColumn = function(data, accessor)
//if i give you this funciton, you'll tell me what you want out of it (def of accessor)
{
    data.sort(function(a,b)
          {
        if (accessor (a)==accessor (b))
       { return 0}
        else if (accessor (a)>accessor(b))
        {return 1}
        else 
            {return -1}
    }   ); 
}
end here


/*
makeTable(data.slice(0,4),"member_state")
var makeTableHeader = function(data)
{
    d3.select("#MS")
        .on("click",function()
    {
        makeTable(data.sort(function(a,b)
        {
            if(a.MS ==b.name ) { return 0; }
            if(a.MS < b.name ) { return -1; }
            if(a.MS > b.name ) { return 1; }
        }),"ALL")    
    })
*/
/*
    sortColumn(planets,"#moons",function(p){return p.moons});
    sortColumn(planets,"#distance",function(p){return p.distance});
    sortColumn(planets,"#img",function(p){return p.distance});
    sortColumn(planets,"#radius",function(p){return p.radius});
    sortColumn(planets,"#density",function(p){return p.density});
}

var setButtons = function(data)
{
    
    d3.select("#basic").on("click",function()
                        {
        makeTable(data,"ALL")
    });
    
    d3.select("#type").on("click",function()
                        {
        makeTable(planets,"Type")
    });
    
    d3.select("#fund").on("click",function()
                        {
        makeTable(planets,"Fund")
    });       
}


var makeTable = function(data,mode)
{
    d3.selectAll("tbody *").remove();
  
    var rows = d3.select("tbody")
    .selectAll("tr")
    .data(data)
    .enter()
    .append("tr");
    
  
    addCol(rows,function(data){return d."member-state"})
    
    rows.append("td")
        .append("img")
        .attr("src",function(planet)
        {
            return planet.img;
        })
        .attr("alt",function(planet)
        {
            return "Picture of "+planet.name;
        })
           
    addCol(rows,function(planet){return planet.moons})
    addCol(rows,function(planet){return planet.distance})
    addCol(rows,function(planet){return planet.radius})
    //addCol(rows,function(planet){return planet.density})
    rows.append("td")
        .text(function(planet){return planet.density})
        .attr("class",function(planet)
        {
                if(planet.density<2) { return "GASSY"; }
                else                 { return "ROCKY"; }
        })
}

var filterData = function(data,mode)
{
    if(mode=="ALL")
    {
        return data;       
    }
    else if (mode == "Type")
    {
        return data.filter(function(d)
        {
            return d.type;                      
        })
    }
    else if (mode == "Fund")
    {
        return Data.filter(function(d)
        {
            return d.fund;                      
        })
    }
    else
    {
        console.error("UNKNOWN fitler Type",mode);    
        return undefined;
    }
}

var addCol = function(rows,fcn)
{
    rows.append("td").text(fcn);
}






var setBanner = function(message)
{
    d3.select("#banner").text(message);
}
*/


/*
//I would like to create 2 columns of a table: the first displays the image of each penguin, the second displays the final score

var appPromise = d3.json("/penguins/classdata.json");
appPromise.then(
    function(penguins)
        {
          makeTable(penguins); 
          getGrade(penguins);
          getQuizMean(penguins);
        }) 
//brings my data in, and calls the function to draw the table.


//This function draws my table
var makeTable = function(penguins)
{
    //d3.select("#mainTable").remove();
     var rows = d3.select("#mainTable")
    .selectAll("tr")
    .data(penguins)
    .enter()
    .append("tr");
    
    //this adds a column of images of penguins 
    rows.append("td")
        .append("img")
        .attr("src",function(d)
        {
            return "penguins/" + d.picture;
        //look at why "penguins" etc.
        });

    //These addCol functions are self-designed (not from the language), and take functions as inputs to basically automate the table generating process 
    addCol(rows,function(penguin)
    {
        return penguin.final[0].grade;
    })
    
    addCol(rows,function(penguin)
    {
        return getQuizMean(penguins);
    }) 
     
}
//We want this addCol to be its own function and automate what we did from 37-47
//When building function like this, try leaving the inside of "function()" blank and figure it out as we move forward
//We add "rows" as parameter because it doesn't know what the hell rows is otherwise
var addCol=function(rows, fcn)
    {
       rows.append("td").text(fcn)
    
    }

//These functions calculate the means and other stuff used below as inputs
 var getGrade = function(penguins)
 {
    return penguins.quizes.grade;
 }

var getQuizMean = function(penguin)
    {
        return d3.mean(penguin.quizes,getGrade);
    }

//use this function addCol we created because it tells me what's going on, feels more intuitive, helps me remember; also, if our initial function had a small mistake and I copy/paste it a million times I have all those mistakes, just like adding CSS to everything is easier here too. REMEMBER: function can be packed up and used as a parameter; 

//To add text to next column, a function is needed.
    //Make functions when you realize you're doing too much work (maybe copy/paste a lot, etc.)
    //at its core, d3 is taking the data and creating something with html to match up
 
  /* rows.append("td").text(function(penguin)
        {
            return penguin.final[0].grade
            //study syntax for lines 37/39
        });
    
    //create new column of first quiz grade for each penguin
    rows.append("td").text(function(penguin)
        {
        return penguin.quizes[0].grade
    })*/

//Data (JSON)
//https://cohesiondata.ec.europa.eu/resource/pi4w-3vc9.json
//EU Explanation page
//https://cohesiondata.ec.europa.eu/2014-2020/2014-2020-Financial-Allocations-by-Member-State-Br/pi4w-3vc9
//Wiki explanation of some funds
//https://en.wikipedia.org/wiki/Structural_Funds_and_Cohesion_Fund
