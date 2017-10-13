$(document).ready(function(){

      $.ajax({

          url: 'https://newsapi.org/v1/articles?source=fortune&sortBy=latest&apiKey=' + "d482a9751e764532b25ff420b503e2e7",
          type: "GET",
          dataType: "json",
          success: function(news){
            var newsData1='';
            var newsData2='';
            var newsData3='';
            var newsData4='';
            var newsData5='';
            var newsData6='';
            var newsData7='';
            var newsData8='';
            var newsData9='';
            var newsData10='';

            newsData1+=  "<div>" + (1.) + " " + news.articles[0].title+" </div> <br>";
            newsData1+=  "<div>" + news.articles[0].description+"</div> <br>";
            newsData1+=  "<div>" + news.articles[0].url +"</div> <br>";

            newsData2+=  "<div>" + (2.) + " " + news.articles[1].title+" </div> <br>";
            newsData2+=  "<div>" + news.articles[1].description+"</div> <br>";
            newsData2+=  "<div>" + news.articles[1].url +"</div> <br>";

            newsData3+=  "<div>" + (3.) + " " + news.articles[2].title+" </div> <br>";
            newsData3+=  "<div>" + news.articles[2].description+"</div> <br>";
            newsData3+=  "<div>" + news.articles[2].url +"</div> <br>";

            newsData4+=  "<div>" + (4.) + " " + news.articles[3].title+" </div> <br>";
            newsData4+=  "<div>" + news.articles[3].description+"</div> <br>";
            newsData4+=  "<div>" + news.articles[3].url +"</div> <br>";

            newsData5+=  "<div>" + (5.) + " " + news.articles[4].title+" </div> <br>";
            newsData5+=  "<div>" + news.articles[4].description+"</div> <br>";
            newsData5+=  "<div>" + news.articles[4].url +"</div> <br>";

            newsData6+=  "<div>" + (6.) + " " + news.articles[5].title+" </div> <br>";
            newsData6+=  "<div>" + news.articles[5].description+"</div> <br>";
            newsData6+=  "<div>" + news.articles[5].url +"</div> <br>";

            newsData7+=  "<div>" + (7.) + " " + news.articles[6].title+" </div> <br>";
            newsData7+=  "<div>" + news.articles[6].description+"</div> <br>";
            newsData7+=  "<div>" + news.articles[6].url +"</div> <br>";

            newsData8+=  "<div>" + (8.) + " " + news.articles[7].title+" </div> <br>";
            newsData8+=  "<div>" + news.articles[7].description+"</div> <br>";
            newsData8+=  "<div>" + news.articles[7].url +"</div> <br>";

            newsData9+=  "<div>" + (9.) + " " + news.articles[8].title+" </div> <br>";
            newsData9+=  "<div>" + news.articles[8].description+"</div> <br>";
            newsData9+=  "<div>" + news.articles[8].url +"</div> <br>";

            newsData10+=  "<div>" + (10.) + " " + news.articles[9].title+" </div> <br>";
            newsData10+=  "<div>" + news.articles[9].description+"</div> <br>";
            newsData10+=  "<div>" + news.articles[9].url +"</div> <br>";

          $("#latestNews1").html(newsData1);
          $("#latestNews2").html(newsData2);
          $("#latestNews3").html(newsData3);
          $("#latestNews4").html(newsData4);
          $("#latestNews5").html(newsData5);
          $("#latestNews6").html(newsData6);
          $("#latestNews7").html(newsData7);
          $("#latestNews8").html(newsData8);
          $("#latestNews9").html(newsData9);
          $("#latestNews10").html(newsData10);
          }
    });
});
