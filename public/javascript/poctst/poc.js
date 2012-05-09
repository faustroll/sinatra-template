
function foo_bar(){
      alert('foo_bar')
        var dataset = [ 5, 10, 15, 20, 25 ];
        alert('check one two');
        d3.select("body").selectAll("P")
        .data(dataset)
        .enter()
        .append("p")
        .text(function (d) {return d;})
        .style("color", function (d) {
                if (d<15){
                        return "red";
                }else{
                        return "black";
                } 
        });
      }

