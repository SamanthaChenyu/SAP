var collectorAddress = 'http://tkwmt.cw.com.tw/SurveyCollector';
var trackingServerAddress = 'http://tkwmt.cw.com.tw';

var node; // Address DOM object oriented, so each address change is specified



function getFebDays(a) {
    var b = $(a).parents(".field"),
        c = $(b).find('[name^="date_year"]').val(),
        d = $(b).find('[name^="date_month"]').val();
    if ("" != c && "" != d) {
        for (var e = '<option selected value=""></option>', f = 1; f <= getNumberOfDays(c, parseInt(d) - 1); f++) e += '<option value="' + f + '">' + f + "</option>";
        $(b).find('[name^="date_day"]').html(e)
    }
}
function getNumberOfDays(a, b) {
    return [31, a % 4 != 0 || a % 100 == 0 && a % 400 != 0 ? 28 : 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
}
function DateIsValid(a) {
    if ("___/__/__" == a) return !0;
    var b = a.split("/"),
        c = Number(b[0]) + 1911,
        d = Number(b[1]),
        e = Number(b[2]),
        f = !0;
    return !isNaN(c) && !isNaN(d) && !isNaN(e) && (0 != d && 0 != e || (f = !1), 2 == d ? 29 == e ? f = c % 4 == 0 && (c % 100 != 0 || c % 400 == 0) : e > 28 && (f = !1) : 4 == d || 6 == d || 9 == d || 11 == d ? e > 30 && (f = !1) : (e > 31 && (f = !1), d > 12 && (f = !1))), 1 != b.length ? !(-1 != b[0].indexOf("_") && "___" != b[0] || -1 != b[1].indexOf("_") && "__" != b[0] || -1 != b[2].indexOf("_") && "__" != b[0]) && f : f
}
$(document).ready(function ()
{
    var data;
    $.ajaxSetup({
        dataType: "jsonp",
        scriptCharset: "utf-8",
        crossDomain: true,
        contentType: "application/json; charset=utf-8"
    });


    $.getJSON(collectorAddress + '/AddressData.ashx?countryCode=tw&type=citylist&callback=?');


    $("select[desc=city]").change(function ()
    {
        node = $(this).parents("div.field-content");
        $.getJSON(collectorAddress + '/AddressData.ashx?countryCode=tw&type=zip&callback=?');
    });

    $("select[desc=dist]").change(function (obj)
    {
        node = $(this).parents("div.field-content");
        $("input[desc=zip]", node).val($("select[desc=dist] option:selected", node).val());
    });

    $("input[desc=zip]", node).val('');
});

// this function will be called when citylist information is received from JSONP
function getCityList(data)
{
    var listItems = '<option value=\"\">請輸入</option>';
    $.each(data.city, function (key, value)
    {
        listItems += "<option value=" + value + ">" + value + "</option>";
    });

    $("select[desc=city]", node).html(listItems);

}

function getZipList(data)
{
    var city = $("select[desc=city] option:selected", $(node)).text();
    var listItems = '';
    var hasFirstZip = false;
    var zip;

    $.each(data.zip, function ()
    {
        $(this).each(function (key, info)
        {
            if (city == info.city)
            {
                listItems += "<option value=" + info.code + ">" + info.dist + "</option>";
                if (!hasFirstZip)
                {
                    zip = info.code;
                    hasFirstZip = true;
                }
            }
        });
    });

    $("select[desc=dist]", $(node)).html(listItems);
    $("input[desc=zip]", $(node)).val(zip); 
}

(function (window, $) {

var sheetID = "1ryxzxTj-UlK_9YCQDcpLi6cYarASpT_AN2DDEt6Qx20", // 試算表代號
    gid = "0", // 工作表代號
    sql = "select+E%2CF", // SQL 語法
    callback = "callback"; // 回呼函數名稱

$.getScript("https://spreadsheets.google.com/tq?tqx=responseHandler:" + callback + "&tq=" + sql + "&key=" + sheetID + "&gid=" + gid);

window[callback] = function (json) {

    var rowArray = json.table.rows,
        rowLength = rowArray.length,
        html = "",
        i, j, dataGroup, dataLength;

    for (i = 0; i < rowLength; i++) {
        dataGroup = rowArray[i].c;
        dataLength = dataGroup.length;
        for (j = 0; j < dataLength; j++) {
            if (!dataGroup[j]) {
                continue;
        }       
        html += "<div class='data'>" + (dataGroup[j].v || "") + "</div>";
        }
    }
        $("#test").html(html);
    };
    
})(window, jQuery);

function Search() {
  $(".data").each(function() {
    var phone = $("#mobile").val();
    
    if ( $(this).text() == phone ) {
            $("#status").removeClass().addClass("no");
            return false;
    } else {
            $("#status").removeClass().addClass("ok");
    }

  })
}

function emailSearch() {
  $(".data").each(function() {
    var email = $("#email").val();

    if ( $(this).text() == email ) {
            $("#emailstatus").removeClass().addClass("no");
            return false;
    } else {
            $("#emailstatus").removeClass().addClass("ok");
    }

  })
}

function keypress(data) {
    // $("#county_o").change(function(){
    // var t = $(this).val();
    // var text = $("#county_o option:selected").text();
    // var test = $("#county_code").attr('value',text);
    // }); 
    // var city = $("#city_o").val();
    // var address_o = $("#address_o").val();
    // var address = city+text+address_o;

    // var month = $("#date_month_6").val();
    // var day = $("#date_day_6").val();
    // var year = $("#date_year_6").val();
    // var birthday = year +"/"+ month +"/"+ day;
    // $("#birthday").attr('value',birthday);
    var sextext = $("#n_3 option:selected").text();
    var departmenttext = $("#n_7 option:selected").text();
    var posittiontext = $("#title_type option:selected").text(); 
    var emaildatatext = $("#n_9 option:selected").text();
    var phonedatatext = $("#n_10 option:selected").text();

    $.get("https://script.google.com/a/cw.com.tw/macros/s/AKfycbzLLyoUWkxjEayZaqjhwkteTAkzvpGjdRT0a8hZEi1PH2uyX6JO/exec", {
                        "lastname": document.getElementById("customer_name").value,
                        "name": document.getElementById("n_2").value,
                        "sex": sextext,
                        "company": document.getElementById("company_name").value,
                        "phone": document.getElementById("mobile").value,
                        "email": document.getElementById("email").value,
                        "department": departmenttext,
                        "posittion": posittiontext,
                        "emaildata": emaildatatext,
                        "phonedata": phonedatatext,                        
        },function (data) {
            
        });

}
 