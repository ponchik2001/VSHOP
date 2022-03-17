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


//Больше фильтров
var more_filter = 0;
function hide_more_filter(){
    if (more_filter == 1){
        more_filter = 0;
        //document.getElementById("filter_item6").classList.remove("hide_select");
        document.getElementById("filter_item7").classList.remove("hide_select");
        document.getElementById("filter_item8").classList.remove("hide_select");
        document.getElementById("filter_item9").classList.remove("hide_select");
        document.getElementById("filter_item10").classList.remove("hide_select");
        document.getElementById("filter_item11").classList.remove("hide_select");
        document.getElementById("filter_item12").classList.remove("hide_select");
        document.getElementById("filter_item13").classList.remove("hide_select");
        document.getElementById("filter_item14").classList.remove("hide_select");
        document.getElementById("filter_item15").classList.remove("hide_select");
        document.getElementById("filter_item16").classList.remove("hide_select");
        document.getElementById("filter_item17").classList.remove("hide_select");
        document.getElementById("filter_item18").classList.remove("hide_select");
        document.getElementById("more_filter_button").innerHTML = 'Меньше фильтров<img src="img/disign/select-bg.png" alt="" style="transform: rotate(180deg)">';
    } else if (more_filter == 0){
        more_filter = 1;
        //document.getElementById("filter_item6").classList.add("hide_select");
        document.getElementById("filter_item7").classList.add("hide_select");
        document.getElementById("filter_item8").classList.add("hide_select");
        document.getElementById("filter_item9").classList.add("hide_select");
        document.getElementById("filter_item10").classList.add("hide_select");
        document.getElementById("filter_item11").classList.add("hide_select");
        document.getElementById("filter_item12").classList.add("hide_select");
        document.getElementById("filter_item13").classList.add("hide_select");
        document.getElementById("filter_item14").classList.add("hide_select");
        document.getElementById("filter_item15").classList.add("hide_select");
        document.getElementById("filter_item16").classList.add("hide_select");
        document.getElementById("filter_item17").classList.add("hide_select");
        document.getElementById("filter_item18").classList.add("hide_select");
        document.getElementById("more_filter_button").innerHTML = 'Больше фильтров<img src="img/disign/select-bg.png" alt="" style="transform: rotate(0)">';
    }
}



hide_more_filter();
















