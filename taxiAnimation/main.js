 $("input").click(function dark() {
                if ($("body").hasClass('dark-mode')) {
                    $("body").removeClass("dark-mode");
                     $(".scene-container").addClass("light");
                     $(".scene-container").removeClass("dark");
                    $("body").addClass("light-mode");
                    
                    
                    $(".rise").css("background", "url('sun.svg')");
                    
                   
                }
                else {
                    $("img").attr("src", "moon.svg");
                    $("body").removeClass("light-mode");
                     $(".scene-container").addClass("dark");
                     $(".scene-container").removeClass("light");
                     $("body").addClass("dark-mode");
                     
                    $(".rise").css("background", "url('moon.svg')");
                    
                }
            });