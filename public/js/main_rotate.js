var tuRotateMenu=function(options){
            this.o=options;
            this.count=0;
            this.cx=($(document).width() / 1.4);
            this.cy=($(document).height() / 2.5);
            var iteam=$("."+this.o.iClass);
            this.total=iteam.length;
            var self=this;
            var speed=this.o.maxS;
             //initilize function
             this.init=function(){
                iteam.bind("mouseenter",self.speedDown);
                iteam.bind("mouseleave",self.speedUp);
                setInterval(self.rotate, 10);
            };
            //rotate function
            this.rotate=function(){
                iteam.each(function(){
                    var agl = self.count * (Math.PI / 180);
                    var newx = self.cx + Math.cos(agl) * self.o.radious;
                    var newy = self.cy + Math.sin(agl) * self.o.radious;
                    $(this).css("left", newx + "px").css("top", newy + "px");
                    self.count+= 360 / self.total + speed;
                });
            };
            //trigger when mouse unhover
            this.speedUp=function(){

                speed=self.o.maxS;
            };
            //trigger when mouse hover
            this.speedDown=function(){
                
                speed=self.o.minS;
            };
        };
        //this function will be called when we use it
        function rotateMenu(options)
        {
            //object for turotateMenu
            var oRM=new tuRotateMenu(options);
            oRM.init();
        }


//this is menu 2
var tuRotateMenu2=function(options){
            this.o=options;
            this.count=0;
            this.cx=($(document).width() / 12);
            this.cy=($(document).height() / 2.3);
            var iteam=$("."+this.o.iClass);
            this.total=iteam.length;
            var self=this;
            var speed=this.o.maxS;
             //initilize function
             this.init=function(){
                iteam.bind("mouseenter",self.speedDown);
                iteam.bind("mouseleave",self.speedUp);
                setInterval(self.rotate, 10);
            };
            //rotate function
            this.rotate=function(){
                iteam.each(function(){
                    var agl = self.count * (Math.PI / 180);
                    var newx = self.cx + Math.cos(agl) * self.o.radious;
                    var newy = self.cy + Math.sin(agl) * self.o.radious;
                    $(this).css("left", newx + "px").css("top", newy + "px");
                    self.count+= 360 / self.total + speed;
                });
            };
            //trigger when mouse unhover
            this.speedUp=function(){

                speed=self.o.maxS;
            };
            //trigger when mouse hover
            this.speedDown=function(){
                
                speed=self.o.minS;
            };
        };
        //this function will be called when we use it
        function rotateMenu2(options)
        {
            //object for turotateMenu
            var oRM=new tuRotateMenu2(options);
            oRM.init();
        }

//this is menu 3
var tuRotateMenu3=function(options){
            this.o=options;
            this.count=0;
            this.cx=($(document).width() / 2.5);
            this.cy=($(document).height() / 2.2);
            var iteam=$("."+this.o.iClass);
            this.total=iteam.length;
            var self=this;
            var speed=this.o.maxS;
             //initilize function
             this.init=function(){
                iteam.bind("mouseenter",self.speedDown);
                iteam.bind("mouseleave",self.speedUp);
                setInterval(self.rotate, 10);
            };
            //rotate function
            this.rotate=function(){
                iteam.each(function(){
                    var agl = self.count * (Math.PI / 180);
                    var newx = self.cx + Math.cos(agl) * self.o.radious;
                    var newy = self.cy + Math.sin(agl) * self.o.radious;
                    $(this).css("left", newx + "px").css("top", newy + "px");
                    self.count+= 360 / self.total + speed;
                });
            };
            //trigger when mouse unhover
            this.speedUp=function(){

                speed=self.o.maxS;
            };
            //trigger when mouse hover
            this.speedDown=function(){
                
                speed=self.o.minS;
            };
        };
        //this function will be called when we use it
        function rotateMenu3(options)
        {
            //object for turotateMenu
            var oRM=new tuRotateMenu3(options);
            oRM.init();
        }
$(window).resize(rotateMenu,rotateMenu2,rotateMenu3);