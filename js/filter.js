//Цена от ... до ...
var hid_Price_from_to = 0;
function hide_price_from_to(){
    if (hid_Price_from_to == 0){
        hid_Price_from_to = 1;
        document.getElementById("price_from_to").classList.remove("select_wrapper");
    } else if (hid_Price_from_to == 1){
        hid_Price_from_to = 0;
        document.getElementById("price_from_to").classList.add("select_wrapper");
    }
    
}
//Цена от ... до ...

//Год от ... до ...
var hid_Year_from_to = 0;
function hide_year_from_to(){
    if (hid_Year_from_to == 0){
        hid_Year_from_to = 1;
        document.getElementById("year_from_to").classList.remove("select_wrapper");
    } else if (hid_Year_from_to == 1){
        hid_Year_from_to = 0;
        document.getElementById("year_from_to").classList.add("select_wrapper");
    }
    
}
//Год от ... до ...


//Пробег от ... до ...
var hid_Km_from_to = 0;
function hide_km_from_to(){
    if (hid_Km_from_to == 0){
        hid_Km_from_to = 1;
        document.getElementById("km_from_to").classList.remove("select_wrapper");
    } else if (hid_Km_from_to == 1){
        hid_Km_from_to = 0;
        document.getElementById("km_from_to").classList.add("select_wrapper");
    }
    
}
//Пробег от ... до ...

//Тип двигателя
var hid_engine_type = 0;
function hide_engine_type(){
    if (hid_Km_from_to == 0){
        hid_Km_from_to = 1;
        document.getElementById("engine_type").classList.remove("select_wrapper");
    } else if (hid_Km_from_to == 1){
        hid_Km_from_to = 0;
        document.getElementById("engine_type").classList.add("select_wrapper");
    }
    
}
//Тип двигателя

//Объём двигателя
var hid_volume_engine = 0;
function hide_volume_engine(){
    if (hid_volume_engine == 0){
        hid_volume_engine = 1;
        document.getElementById("volume_engine").classList.remove("select_wrapper");
    } else if (hid_volume_engine == 1){
        hid_volume_engine = 0;
        document.getElementById("volume_engine").classList.add("select_wrapper");
    }
    
}
//Объём двигателя


//Тип кузова
var hid_type_body= 0;
function hide_type_body(){
    if (hid_type_body == 0){
        hid_type_body = 1;
        document.getElementById("type_body").classList.remove("select_wrapper");
    } else if (hid_type_body == 1){
        hid_type_body = 0;
        document.getElementById("type_body").classList.add("select_wrapper");
    }
    
}
//Тип кузова


//Цвет кузова
var hid_color_body= 0;
function hide_color_body(){
    if (hid_color_body == 0){
        hid_color_body = 1;
        document.getElementById("color_body").classList.remove("select_wrapper");
    } else if (hid_color_body == 1){
        hid_color_body = 0;
        document.getElementById("color_body").classList.add("select_wrapper");
    }
    
}
//Цвет кузова























