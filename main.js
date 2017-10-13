$(document).ready(function(){

      $.ajax({

          url: 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=' + "d482a9751e764532b25ff420b503e2e7",
          type: "GET",
          dataType: "json",
          success: function(news){
            var newsData1='';

            newsData1+=  "<div>" + (1.) + " " + news.articles[0].title+" </div> <br>";
            newsData1+=  "<div>" + news.articles[0].description+"</div> <br>";
            newsData1+=  "<div>" + news.articles[0].url +"</div> <br>";

              $("#latestNews1").html(newsData1);
          }
    });

    $.ajax({

        url: 'https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=' + "d482a9751e764532b25ff420b503e2e7",
        type: "GET",
        dataType: "json",
        success: function(news){

          var newsData2='';

            newsData2+=  "<div>" + (2.) + " " + news.articles[1].title+" </div> <br>";
            newsData2+=  "<div>" + news.articles[1].description+"</div> <br>";
            newsData2+=  "<div>" + news.articles[1].url +"</div> <br>";

              $("#latestNews2").html(newsData2);
          }
    });

    $.ajax({

        url: ' https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=' + "d482a9751e764532b25ff420b503e2e7",
        type: "GET",
        dataType: "json",
        success: function(news){

          var newsData3='';

            newsData3+=  "<div>" + (3.) + " " + news.articles[2].title+" </div> <br>";
            newsData3+=  "<div>" + news.articles[2].description+"</div> <br>";
            newsData3+=  "<div>" + news.articles[2].url +"</div> <br>";

            $("#latestNews3").html(newsData3);

          }
    });

    $.ajax({

        url: 'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=' + "d482a9751e764532b25ff420b503e2e7",
        type: "GET",
        dataType: "json",
        success: function(news){

          var newsData4='';

            newsData4+=  "<div>" + (4.) + " " + news.articles[3].title+" </div> <br>";
            newsData4+=  "<div>" + news.articles[3].description+"</div> <br>";
            newsData4+=  "<div>" + news.articles[3].url +"</div> <br>";

            $("#latestNews4").html(newsData4);
          }
    });

    $.ajax({

        url: 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=' + "d482a9751e764532b25ff420b503e2e7",
        type: "GET",
        dataType: "json",
        success: function(news){

          var newsData5='';
            newsData5+=  "<div>" + (5.) + " " + news.articles[4].title+" </div> <br>";
            newsData5+=  "<div>" + news.articles[4].description+"</div> <br>";
            newsData5+=  "<div>" + news.articles[4].url +"</div> <br>";

            $("#latestNews5").html(newsData5);
          }
    });
});
