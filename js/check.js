function checkIfTitleNeedsToHide(a, b, c) {
    for (var d, e = 0; e < $(".section").size(); e++) d = Number($(".section").eq(e).attr("tabindex")) + 1, a <= d && d <= b && (c ? $(".section").eq(e).show() : $(".section").eq(e).hide())
}

function showTitle(a, b, c) {
    for (var d, e = 0; e < $(".section").size(); e++)(d = parseInt($(".section").eq(e).attr("tabindex")) + 1) >= a && d <= b && (c ? $(".section").eq(e).show() : $(".section").eq(e).hide())
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

function nextPage(a) {
    var f, b = $(a).attr("accesskey").toString(),
        c = (parseInt($(a).attr("accesskey")) + 1).toString(),
        d = !0,
        e = "";
    if ($(".field:visible", $("#page" + b + ":visible")).each(function() {
            (f = dform.validateQ($(this))) || (d = !1, e += $(this).attr("accesskey") + ",")
        }), "" != e && (e = e.substring(0, e.length - 1), alert(res_PleaseCompleteTheRequiredFields + ": " + e)), 0 == d && ($("input:button").removeAttr("disabled"), $("div.ValError").show()), 1 == d) {
        var i, j, k, g = $("#page" + b),
            h = !1,
            l = $(".field[jump]", $(g)).last();
        if ($("a", $(l)).each(function() {
                $(this).hasClass("selected") && (h = !0, i = this)
            }), h) {
            j = parseInt($(i).attr("accesskey"));
            var m = !0;
            if ($(".field").each(function() {
                    parseInt($(this).attr("accesskey")) == j && (k = parseInt($(this).parents('[id*="page"]').attr("id").replace("page", "")), k == b && k++, m = !1)
                }), m) k = parseInt($("#tpage").val()), $(".field", $("#page" + k)).each(function() {
                $(this).hide()
            });
            else {
                var n = $(i).parents(".field").attr("jump"),
                    o = $(i).attr("accesskey");
                n > $("#dform").find(".field").length && (n = $("#dform").find(".field").length);
                for (var p = parseInt(o); p <= parseInt(n); p++) $(".field[accesskey='" + p + "']").show()
            }
            $("div.ValError").html(""), $("#page" + b).hide(), $("#page" + k).show(), $("input[name='prev']", $("#page" + k)).attr("jb", b)
        } else {
            for (var q = !1, d = c; d <= Number($("#tpage").val()) && ($(".field", $("#page" + d)).each(function() {
                    "block" == $(this).css("display") && (c = d, q = !0)
                }), !q); d++);
            $("div.ValError").html(""), $("#page" + c).show(), $("#page" + b).hide(), $("input[name='prev']", $("#page" + c)).attr("jb", b)
        }
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    }
}

function prevPage(a) {
    var b = $(a).attr("accesskey").toString(),
        c = (parseInt($(a).attr("accesskey")) - 1).toString();
    $(a).attr("jb") && (c = $(a).attr("jb"), $(a).removeAttr("jb")), $("div.ValError").hide(), $("#page" + c).show(), $("#page" + b).hide(), scroll(0, 0)
}


function show(a) {
    for (var b = parseInt($(a).parents("div.field").attr("accesskey")) + 1, c = $(a).attr("accesskey") ? parseInt($(a).attr("accesskey")) - 1 : parseInt($(a).find("a").attr("accesskey")) - 1, d = parseInt($(a).parents("div.field").attr("jump")) - 1, e = b; e <= d; e++) $("div.field[accesskey=" + e + "]").show(), $("div.section").each(function() {
        var a = parseInt($(this).attr("tabindex")) + 1;
        1 != a && a <= c && a >= b && $(this).hide()
    });
    showTitle(b, d, !0);
    for (var f = b; f <= c; f++) $("div.field[accesskey=" + f + "]").hide(), $("div.section").each(function() {
        var a = parseInt($(this).attr("tabindex")) + 1;
        1 != a && a <= c && a >= b && $(this).hide()
    });
    showTitle(b, c, !1)
}

function hideAllSpecifyBox() {
    $("input.specifybox").each(function() {
        $(this).hide()
    })
}

function toggleInput(a) {
    var b = "mco" == $(a).attr("class") ? $(a).find("a") : a;
    $("input:text", $(b)).is(":focus");
    if ($(b).parents(".field").attr("ordered")) {
        $(b).attr("class") && "" != $(b).attr("class") || $(b).next().show();
        var d = $(a).parents(".field-content"),
            e = $("input[type='hidden']", $(d)).val();
        "" != e ? $("input[type='hidden']", $(d)).val(e + "," + $(a).parent().parent().attr("order")) : $("input[type='hidden']", $(d)).val($(a).parent().parent().attr("order")), fromSpecify = !1
    } else if ($(b).attr("single")) $("input", $(b).parent()).show(), $("input", $(b).parent()).focus();
    else {
        $(b).attr("class") && "" != $(b).attr("class") || ($(b).find("input:text").show(), $(b).find("input:text").focus());
        var d = $(a).parents(".field-content"),
            e = $("input[type='hidden']", $(d)).val();
        "" != e ? $("input[type='hidden']", $(d)).val(e + "," + $(a).parent().parent().attr("order")) : $("input[type='hidden']", $(d)).val($(a).parent().parent().attr("order"))
    }
}

function submitSurvey() {
    RemoveNotSelectedSpecifyValue();
    var a = "<survey>",
        b = !1;
    $(document).find(".field").each(function() {
        b = "none" == $(this).css("display") && !$(this).hasClass("needSubmit");
        var c = $(this).attr("ispk"),
            d = $(this).attr("isuk"),
            e = $(this).find(".field-label").text(),
            f = $(this).attr("id"),
            g = "",
            h = "";
        if (void 0 === d && (d = "0"), $(".dateGroup", $(this)).length > 0) {
            var i = $('[name*="year"]', $(this)).val() + "/" + $('[name*="month"]', $(this)).val() + "/" + $('[name*="day"]', $(this)).val();
            2 == i.length && (i = ""), a += '<naire id="' + $(this).attr("oid") + '" ispk="' + c + '" oid="' + $(this).attr("oid") + '">' + (b ? "" : i) + "</naire>"
        } else $("select", $(this)).length > 0 && $("select", $(this)).each(function() {
            if (0 != $("select", $(this)).attr("selectedIndex"))
                if ("city" == $(this).attr("desc")) {
                    var d = 0 == $(":selected", $(this)).index() ? "" : $(":selected", $(this)).text();
                    a += '<naire id="' + $(this).attr("id") + '" ispk="' + c + '" oid="' + f + '">' + (b ? "" : d) + "</naire>"
                } else "dist" == $(this).attr("desc") ? a += '<naire id="' + $(this).attr("id") + '" ispk="' + c + '" oid="' + f + '">' + (b ? "" : $(":selected", $(this)).text()) + "</naire>" : a += '<naire id="' + $(this).attr("id") + '" ispk="' + c + '" oid="' + f + '">' + (b ? "" : $(":selected", $(this)).val()) + "</naire>";
            else a += '<naire id="' + $(this).attr("id") + '" ispk="' + c + '" oid="' + f + '"></naire>'
        }), $("input", $(this)).each(function() {
            if ("" != $(this).attr("id")) {
                var i = $(this).val();
                $(this).attr("dateonly") && "" != $(this).val() && (i = Number($(this).val().substring(0, 3)) + 1911, i = i.toString() + $(this).val().substring(3)), a += '<naire id="' + $(this).attr("id") + '" ispk="' + c + '" isuk="' + d + '" oid="' + f + '"><![CDATA[' + (b ? "" : i.replace(/\'/g, "*singlequote*")) + "]]></naire>", $(this).attr("id") == h && "" != g && (a += g, g = "", h = "")
            } else h = f.replace("div_", ""), g = '<naire id="' + h + '_o" ispk="' + c + '" isuk="0" oid="' + f + '" label="' + e + '">' + (b ? "" : $(this).val().replace(/\'/g, "*singlequote*")) + "</naire>"
        }), $("textarea", $(this)).length > 0 && (a += '<naire id="' + $("textarea", $(this)).attr("id") + '" ispk="' + c + '" oid="' + f + '"><![CDATA[' + (b ? "" : $("textarea", $(this)).val().replace(/[\r\n]+/g, " ").replace(/\'/g, "*singlequote*")) + "]]></naire>")
    }), $(document).find("input[question='false']").each(function() {
        a += '<naire id="' + $(this).attr("id") + '" ispk="' + $(this).attr("ispk") + '" isuk="0" oid="' + $(this).attr("id") + '">' + $(this).val() + "</naire>"
    }), a += "</survey>";
    var c = '<input id="SID" name="SID" type="hidden"" value="' + $("#SID").val() + '" /><input id="rURL" name="rURL" type="hidden"" value="' + $("#rURL").val() + '" /><input id="clientID" name="clientID" type="hidden"" value="' + $("#clientID").val() + '" /><input id="campaignID" name="campaignID" type="hidden"" value="' + $("#campaignID").val() + '" /><input id="xml" name="xml" type="hidden"" value="' + encodeURIComponent(a) + '">';
    $("#dform").remove(), $("#form").html(c), document.forms.form.submit()
}

function checkMaxOption(a) {
    var b = $(a).parents("div.field"),
        c = parseInt($(b).attr("maxOption")),
        d = $("a.selected", $(b)).size(),
        e = !1;
    return !$(a).hasClass("selected") && $(b).attr("maxOption") && (d >= c ? (alert(res_MaxOptionReached), $(a).removeClass("selected"), $(a).next().hide(), e = !0) : e = !1), e
}

function ReachedMaxOption(a) {
    var b = $(a).parents("div.field"),
        c = parseInt($(b).attr("maxOption")),
        d = $("a.selected", $(b)).size(),
        e = !1;
    return !$(a).hasClass("selected") && $(b).attr("maxOption") && (d >= c ? ($(a).removeClass("selected"), $(a).next().hide(), e = !0) : e = !1), e
}

function checkWithOrder(a) {
    var b = $("input:text", $(a).parent()).is(":focus");
    $(a).attr("onclick") ? b || $(a).toggleClass("selected") : $(a).toggleClass("selected");
    var c = $(a).parents("ul"),
        d = !1,
        e = 1,
        f = !1;
    if (-1 == $(a).css("background-image").indexOf("check-on.png") && $(a).css("background-image", "url(" + trackingServerAddress + "/surveycollector/images/check-off.png)"), $(a).hasClass("selected")) {
        for (var g = 1; g <= 9; g++)
            if (d = !1, $(c).find("a").each(function() {
                    -1 != $(this).css("background-image").indexOf(g + ".png") && (d = !0, 9 == g && (f = !0))
                }), !d) {
                e = g;
                break
            }
        f ? (alert(res_reached9), $(a).removeClass("selected"), $(a).css("background-image", "url(" + trackingServerAddress + "/surveycollector/images/check-off.png)")) : $(a).css("background-image", "url(" + trackingServerAddress + "/surveycollector/images/check_" + e + ".png)"), $(a).trigger("change"), $(a).next().show()
    } else fromSpecify || ($(a).next().hide(), $(a).next().val(""));
    fromSpecify = !1
}

function checkROCID(a) {
    if ("" === a) return !0;
    var b, c, d, e, f = 0;
    for (b = a.toUpperCase(), d = 0; d < 9; d++) 0 === d ? (e = "ABCDEFGHJKLMNPQRSTUVXYWZIO".indexOf(b.substring(0, 1)) + 10, f += Math.floor(e / 10), f += e % 10 * 9) : f += parseInt(b.substr(d, 1)) * (9 - d);
    return c = f % 10 == 0 ? 0 : 10 - f % 10, c.toString() == b.substr(9, 1)
}

function selectOption(a) {
    $(a).prev().attr("class", "selected")
}

function showHide(a) {
    if (!ReachedMaxOption(a)) {
        var b = "mco" == $(a).attr("class") ? $(a).find("a") : a,
            c = parseInt($(b).attr("start")),
            d = parseInt($(b).attr("end"));
        if (NaN != typeof c && NaN != typeof d)
            if ($(b).hasClass("selected")) {
                for (var e = c; e <= d; e++) $(document).find("div.field[accesskey=" + e + "]").hide();
                checkIfTitleNeedsToHide(c, d, !1)
            } else {
                for (var e = c; e <= d; e++) $(document).find("div.field[accesskey=" + e + "]").show();
                checkIfTitleNeedsToHide(c, d, !0)
            }
        "function" == typeof parent.calcHeight && parent.calcHeight()
    }
}

function specifyFocused(a) {
    fromSpecify = !0
}

function RemoveNotSelectedSpecifyValue() {
    $("ul.multiple").each(function() {
        $(this).find("input[onkeyup]").each(function() {
            0 == $(this).parent().find("a.selected").length && 0 == $(this).parent().parent().find("a.selected").length && $(this).val("")
        })
    }), $("ul.single").each(function() {
        $(this).find("input[onkeyup]").each(function() {
            0 == $(this).parent().find("a.selected").length && 0 == $(this).parent().parent().find("a.selected").length && $(this).val("")
        })
    })
}

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
var emailValidated = !0,
    ROCIDValidated = !0,
    fromSpecify = !1,
    mobileValidated = !0;
$(document).ready(function() {
    collectorAddress = -1 == location.protocol.indexOf("file:") ? location.protocol + collectorAddress.substr(collectorAddress.indexOf("//")) : collectorAddress, trackingServerAddress = -1 == location.protocol.indexOf("file:") ? location.protocol + trackingServerAddress.substr(trackingServerAddress.indexOf("//")) : trackingServerAddress, $.ajaxSetup({
        async: !1
    }), "undefined" == typeof surveyIsValid || surveyIsValid || ($("#dform").remove(), alert(res_ThisSurveyIsInvalid)), $("input[numbersOnly]").live("keydown", function(a) {
        (a.shiftKey || a.ctrlKey || a.altKey || !(a.keyCode >= 48 && a.keyCode <= 57 || a.keyCode >= 96 && a.keyCode <= 105)) && 8 != a.keyCode && 9 != a.keyCode && 46 != a.keyCode && 37 != a.keyCode && 39 != a.keyCode && (/^\d+$/.test(a.char) || a.preventDefault())
    }), $("input[numbersOnly]").live("input", function(a) {
        /^[a-z0-9]+$/i.test($(this).val()) || $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ""))
    }), $("input[numbersOnly]").on("input", function() {
        isNaN(parseInt($(this).val())) && $(this).val("")
    }), $("input[decimalOnly]").live("keydown", function(a) {
        var b = a.charCode || a.keyCode || 0;
        return 110 == b || 190 == b ? -1 == $(this).val().indexOf(".") : 8 == b || 9 == b || 46 == b || b >= 37 && b <= 40 || b >= 48 && b <= 57 || b >= 96 && b <= 105
    }), $(document).find(".field").each(function() {
        var a = $(".field-label", $(this)).text();
        if ((-1 != a.indexOf("電子郵件") || -1 != a.toLowerCase().indexOf("email") || $('[isemail="true"]', $(this)).length > 0) && "1" === $(this).attr("type")) $("input", $(this)).focusout(function() {
            emailValidated = !0, $(".email").each(function(a, b) {
                if ("" == b.value) $(this).css("background-color", "white");
                else {
                    0 == /^([a-zA-Z0-9_\.\-\'])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/.test(b.value) ? ($(this).css("background-color", "#F6CECE"), emailValidated = !1) : $(this).css("background-color", "white")
                }
            })
        }), $("input", $(this)).addClass("email");
        else if ((-1 != a.indexOf("手機") || -1 != a.toLowerCase().indexOf("mobile") || $('[isphone="true"]', $(this)).length > 0) && "1" === $(this).attr("type")) $("input", $(this)).focusout(function() {
            mobileValidated = !0, $(".mobile").each(function(a, b) {
                if ("" == b.value) $(this).css("background-color", "white");
                else {
                    0 == /^09\d{8}$/.test(b.value) ? ($(this).css("background-color", "#F6CECE"), mobileValidated = !1) : $(this).css("background-color", "white")
                }
            })
        }), $("input", $(this)).attr({
            numbersonly: "",
            maxlength: "10"
        }).addClass("mobile");
        else if (-1 == a.indexOf("身分證") && -1 == a.indexOf("身份證") && -1 == a.toUpperCase().indexOf("ROC ID") || "1" !== $(this).attr("type")) {
            if (-1 != a.indexOf("帳號密碼") || -1 != a.toLowerCase().indexOf("account password")) {
                var b = $("input", $(this)).parent(),
                    c = $("input", $(this)).parent().html();
                c = c.replace("text", "password"), $("input", $(b)).remove(), $(b).html(c)
            }
        } else $("input", $(this)).focusout(function() {
            ROCIDValidated = !0, $(".rocid").each(function(a, b) {
                checkROCID(b.value) ? $(this).css("background-color", "white") : ($(this).css("background-color", "#F6CECE"), ROCIDValidated = !1), "" == $(this).val() && 0 == $(this).parents(".fields").find(".req").length && $(this).css("background-color", "white")
            })
        }), $("input", $(this)).attr("maxlength", 10).addClass("rocid")
    }), $("input[dateOnly]").each(function() {
        $(this).mask("999/99/99")
    }), $("input[dateOnly]").focusout(function() {
        DateIsValid($(this).val()) || (alert(res_DateIsInvalid), $("span.error", $(this).parents(".field")).show(), $("span.field-label", $(this).parents(".field")).css("background", "#FDF9CB"))
    }), $("div.field[hasrange=true]").each(function() {
        $("a[start]", $(this)).each(function() {
            var a = parseInt($(this).attr("start")),
                b = parseInt($(this).attr("end"));
            if (NaN != typeof a && NaN != typeof b) {
                showTitle(a, b, !1);
                for (var c = a; c <= b; c++) $("div.field[accesskey=" + c + "]").hide()
            }
        })
    }), $('input[value="Submit"]').val(res_submit), $('input[value="Next"]').val(res_NextPage), $('input[value="Prev"]').val(res_PreviousPage), $("#exposeMask").remove(), $("input.dateGroup[numbersOnly='true']").each(function() {
        $(this).blur(function() {
            var a = "";
            try {
                a = $(this).parents(".field").attr("dtype"), void 0 == a && (a = "")
            } catch (a) {}
            var b = parseInt($(this).val());
            "17" == a ? b < 1900 ? $(this).val("1900") : b > 2079 && $(this).val("2079") : b < 1753 ? $(this).val("1753") : b > 9999 && $(this).val("9999")
        })
    }), $("select").each(function() {
        $(this).parents(".field").attr("jump") && show($(this).children(":selected"))
    });
    var a = parent.document.location.search.substring(1);
    if ("" != a)
        for (var b = a.split("&"), c = 0; c < b.length; c++) {
            var d = new Array("", ""),
                e = decodeURIComponent(b[c]),
                f = e.indexOf("=");
            f >= 0 ? (d[0] = e.substr(0, f), d[1] = e.substr(f + 1)) : d[0] = e, 0 != $('[tag="' + d[0] + '"]').length && $('[tag="' + d[0] + '"]').val(decodeURIComponent(d[1]))
        }
}), $(function() {
    dform.initializeEvents()
});
var dform = {
    initializeEvents: function() {
        var a = parseInt($("#tpage").val());
        for (i = 2; i <= a; i++) $("#page" + i.toString()).hide();
        $("#ctlNext").click(function() {
            var a = $(this).attr("accesskey").toString();
            (parseInt($(this).attr("accesskey")) + 1).toString();
            $("#action").val("1");
            var c = !0;
            $(".field:visible", $("#page" + a + ":visible")).each(function() {
                0 == dform.validateQ($(this)) && (c = !1)
            }), 0 == c && ($("input:button").removeAttr("disabled"), $("div.ValError").html("Please complete the required fields."), $("div.ValError").show()), 1 == c && ($("div.ValError").hide(), $("#page" + (parseInt($(this).attr("accesskey")) + 1).toString()).show(), $("#page" + parseInt($(this).attr("accesskey")).toString()).hide())
        }), $("select").change(function(a) {
            show($(this).children(":selected"))
        }), $("#ctlPrev").click(function() {
            $("#action").val("0"), $(".field:visible").each(function() {
                dform.validateQ($(this))
            }), $(".field:hidden").each(function() {
                dform.clearFieldValue($(this))
            }), $(".form").submit()
        }), this.setupValidationEvent(), $("input:text").live("keydown", function(a) {
            13 == a.keyCode && a.preventDefault()
        }), $("input:password").live("keydown", function(a) {
            13 == a.keyCode && a.preventDefault()
        }), -1 != navigator.appVersion.indexOf("Chrome/") && $("table.matrix-rating").width() < 300 && $("table.matrix-rating").width(300)
    },
    setupValidationEvent: function() {
        $("a.rate-off").click(function() {
            dform.ratingClick(this)
        }), $("li[class='mco']").click(function() {
            void 0 !== $("a", $(this)).attr("multiple") ? dform.checkboxClick($("a", $(this))) : dform.radioClick($("a", $(this)))
        }), $(".field").each(function() {
            var a = $(this);
            if ("1" == a.attr("req")) {
                var c = a.attr("type");
                "1" == c ? ($("input:text", $(a)).blur(function() {
                    dform.validateQ($(a))
                }), $("input:password", $(a)).blur(function() {
                    dform.validateQ($(a))
                })) : "2" == c ? $("textarea", $(a)).blur(function() {
                    dform.validateQ($(a))
                }) : "4" == c ? $("input:checkbox", $(a)).click(function() {
                    dform.validateQ($(a))
                }) : "7" == c && $("select", $(a)).change(function() {
                    dform.validateQ($(a))
                })
            }
        }), $("input:range").each(function() {
            $(this).rangeinput()
        })
    },
    ratingClick: function(a) {
        $(a).parents("tr").find("a.rate-off").removeClass("rate-on"), $(a).toggleClass("rate-on"), $(a).trigger("change");
        var b = $(a).parents("div.field");
        $("span.error", $(b)).is(":visible") && dform.validateQ(b)
    },
    radioClick: function(a) {
        $(a).parents("ul").find("a.selected").removeClass("selected"), $(a).addClass("selected"), $(a).trigger("change"), dform.validateQ($(a).parents("div.field"));
        var b;
        b = $(a).attr("single") ? $(a).parents("li.mco") : $(a), $("input", $(b)).length > 0 && $("input", $(b)).focus(), $("input[onkeyup]", $(b).parents(".field")).each(function() {
            $(this).is(":focus")
        })
    },
    checkboxClick: function(a) {
        $(a).parents(".field").attr("ordered") ? checkMaxOption(a) || checkWithOrder($(a)) : $(a).parents(".field").attr("maxoption") ? checkMaxOption(a) || ($(a).toggleClass("selected"), $(a).trigger("change")) : "selected" != $(a).attr("class") ? ($("input", $(a).parent()).show(), $(a).attr("class", "selected")) : $(a).attr("class", "");
        var c = $(a).css("background-image").substring($(a).css("background-image").indexOf("/images/"), $(a).css("background-image").length - 1);
        $(a).css("background-image", trackingServerAddress + "/surveycollector/" + c), dform.validateQ($(a).parents("div.field"))
    },
    GetBacktoServer: function() {
        var a = window.location.pathname,
            b = a.lastIndexOf("/"),
            c = a.substr(b + 1, a.length - b),
            d = dform.readCookie("history");
        null != d && d.toLowerCase() != c.toLowerCase() && (window.location.href = window.location.href)
    },
    readCookie: function(a) {
        for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
            for (var e = c[d];
                " " == e.charAt(0);) e = e.substring(1, e.length);
            if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
        }
        return null
    },
    validateQ: function(a) {
        var b = $(a).attr("req"),
            c = $(a).attr("type"),
            d = !0;
        if ("1" == c) {
            var e = $(a).attr("id");
            if (e = e.replace("div_", ""), $(a).find("#" + e + "_city").length >= 1) d = "" != $(a).find("#" + e + "_city").val() && "" != $(a).find("#" + e + "_dist").val() && "" != $(a).find("#" + e + "_zip").val() && "" != $(a).find("#" + e + "_street").val();
            else if ("CWAddr25078627" == e) d = "" != $(a).find("#city").val() && "" != $(a).find("#country").val() && "" != $(a).find("#postal_code").val() && "" != $(a).find("#address").val();
            else if ("CWAddr25068364" == e) d = "" != $(a).find("#city_o").val() && "" != $(a).find("#country_o").val() && "" != $(a).find("#country_o").val() && "" != $(a).find("#address_o").val();
            else if ($(a).find("#addr_city").length >= 1) d = "" != $(a).find("#addr_zip").val() && "" != $(a).find("#addr_content").val();
            else if ($(a).find("#birth_year").length >= 1)
                if ("" == $("#birth_year").val() || 0 == $("#birth_month :selected", $(a)).index() || 0 == $("#birth_day :selected", $(a)).index()) d = !1;
                else {
                    new Date;
                    d = "" != $(a).find("#birth_year").val() && 0 != $(a).find("#birth_month").attr("selectedIndex") && 0 != $(a).find("#birth_day").attr("selectedIndex")
                }
            else if ($(a).find("input[dateOnly]").length >= 1) "" == $(a).find("input[dateOnly]").val() ? d = !1 : DateIsValid($("input[dateOnly]", $(a)).val()) || (d = !1);
            else if ($(a).find(".dateGroup").length > 0) {
                var g = !1;
                b = "0", $(".dateGroup", $(a)).each(function() {
                    "INPUT" == $(this)[0].tagName.toUpperCase() ? $(this).val().length > 0 && (g = !0) : "SELECT" == $(this)[0].tagName.toUpperCase() && "" != $(this).val() && (g = !0)
                });
                var h = !0;
                g || "1" != $(a).attr("req") || (h = !1), g && $(".dateGroup", $(a)).each(function() {
                    "INPUT" == $(this)[0].tagName.toUpperCase() ? 0 == $(this).val().length && (h = !1) : "SELECT" == $(this)[0].tagName.toUpperCase() && "" == $(this).val() && (h = !1)
                }), h || ($(a).find(".field-label").css("background", "yellow"), b = "1"), d = !1
            } else d = $("input:password", $(a)).length > 0 ? "" != $("input:password", $(a)).val() : "" != $("input:text", $(a)).val()
        } else if ("2" == c) d = 0 != $("textarea", $(a)).val().length;
        else if ("3" == c) {
            if (d = this.validateList($(a), !1), $(a).find("input[type='text']").size() > 0 && "1" == b) {
                var i = $(a).find("a.selected");
                $(i).parents("li.mco").find("input[type='text']").size() > 0 && (d = "" != $(i).parents("li.mco").find("input[type='text']").val())
            }
        } else if ("4" == c)
            if (0 != $(a).find("[onclick]").length && $(a).find("[onclick]").hasClass("selected"))
                if ($(a).attr("ordered")) this.validateList($(a), !0), d = "" != $("a.selected", $(a)).parents("li.mco").find("input[type='text']").val();
                else {
                    var i = $("a.selected", $(a));
                    d = !0;
                    var j = $(a);
                    $("input [type='hidden']", j).val("");
                    var i = "";
                    $("li.mco", $(j)).each(function() {
                        $("a", $(this)).hasClass("selected") && ($(this).attr("oid") ? i += $(this).attr("oid") + "," : i += $(this).attr("order") + ",")
                    }), i = i.substring(0, i.length - 1), $("input[type='hidden']", $(j)).val(i), $("a.selected", $(a)).parents("li.mco").find("input[type='text']").size() > 0 && (d = "" != $("a.selected", $(a)).parents("li.mco").find("input[type='text']").val())
                }
        else d = this.validateList($(a), !0);
        else "5" == c ? d = this.validateScaleRating($(a)) : "6" == c ? d = this.validateMatrix($(a)) : "7" == c && (d = 0 != $("option:selected", $("select", $(a))).val().length);
        return d || "1" != b ? ($("span.error", $(a)).hide(), $("span.field-label", $(a)).css("background", "")) : ($("span.error", $(a)).show(), $("span.field-label", $(a)).css("background", "#FFFF00")), "1" != b || d
    },
    validateMatrix: function(a) {
        var d, b = $("table.matrix-rating", $(a)),
            c = !0;
        return $("tr[tp='d']", b).each(function() {
            var b = $(this).attr("fid"),
                e = $("a.rate-on", $(this));
            d = "", 0 == e.length ? c = !1 : (d = $(e).attr("dval"), $("#" + b, $(a)).attr("value", d))
        }), c
    },
    validateScaleRating: function(a) {
        var b = !0,
            c = $("table.scale-rating", $(a));
        return $("tr[tp='d']", c).each(function() {
            var c = $("a.rate-on", $(this));
            0 == c.length ? b = !1 : $("input:hidden", $(a)).attr("value", $(c).text())
        }), b
    },
    validateList: function(a, b) {
        var c = $("ul.mc-select", $(a)),
            d = !0,
            e = $("a.selected", $(c)),
            f = $(a).attr("id").replace("div_", "");
        if (0 == e.length) d = !1, $("input[type='hidden']", $(c).parents(".field-content")).val(j);
        else if (b)
            if ("true" == $(c).parents(".field").attr("ordered")) {
                var g = parseInt($(c).parents(".field").attr("maxoption"));
                $("input[type='hidden']", $(c).parents(".field")).val(""), isNaN(g) && (g = 9);
                for (var h = 0; h <= g; h++) $("a", $(c)).each(function() {
                    var b = $(this).css("background-image").indexOf("check_");
                    if ($(this).css("background-image").substring(b + 6, b + 7) == h.toString()) {
                        var d;
                        if ("" == $("input[type='hidden']", $(a)).val() ? ($(this).text(), d = $(this).parent().attr("oid") ? $(this).parent().attr("oid") ? $(this).parent().attr("oid") : $(this).parent().parent().attr("oid") : $(this).parent().attr("order") ? $(this).parent().attr("order") : $(this).parent().parent().attr("order")) : ($("input[type='hidden']", $(a)).val() + "," + $(this).text(), d = $(this).parent().attr("oid") ? $(this).parent().attr("oid") ? $("input[type='hidden']", $(a)).val() + "," + $(this).parent().attr("oid") : $("input[type='hidden']", $(a)).val() + "," + $(this).parent().parent().attr("oid") : $(this).parent().attr("order") ? $("input[type='hidden']", $(a)).val() + "," + $(this).parent().attr("order") : $("input[type='hidden']", $(a)).val() + "," + $(this).parent().parent().attr("order")), $("input[id=" + f + "]", $(a)).val(d), $(a).attr("maxOption"))
                            for (var e = d.split(","), g = 0; g < e.length; g++) $("input[id=" + f + "_" + (g + 1) + "]", $(a)).val(e[g])
                    }
                })
            } else {
                var i = $(c).parents(".field-content");
                0 == i.length && (i = $(c).parents(".field-content-horizontal")), $("input [type='hidden']", i).val("");
                var j = "";
                $("li.mco", $(c)).each(function() {
                    $("a", $(this)).hasClass("selected") && ($(this).attr("oid") ? j += $(this).attr("oid") + "," : j += $(this).attr("order") + ",")
                }), j = j.substring(0, j.length - 1), $("input[type='hidden']", $(i)).val(j)
            }
        else $(e).attr("fid") ? $("input[type=hidden]", $(a)).val($(e).attr("fid")) : $(e).parents("li.mco").attr("id") ? $("input[type=hidden]", $(a)).val($(e).parents("li.mco").attr("id")) : $("input[type=hidden]", $(a)).val($(e).parents("ul").find("li").index($(e).parents("li.mco")) + 1), "" == $("input", $(e).parents("li.mco")).val() && (d = !1), $("input", $(e).parents("ul.mc-select")).each(function() {}), $(e).attr("single") ? $(e).next().show() : $(e).find("input").show();
        return d
    },
    clearFieldValue: function(a) {
        var b = $(a).attr("type");
        "1" == b ? $("input:text", $(a)).val("") : "2" == b ? $("textarea", $(a)).val("") : "3" == b || "4" == b || "5" == b || "6" == b ? $("input:hidden", $(a)).each(function() {
            $(this).val("")
        }) : "7" == b ? $("select", $(a)).val("") : "8" == b && $("input.range", $(a)).val("")
    },
    clearField: function(a) {
        var b = $(a).attr("type");
        "1" == b ? $("input:text", $(a)).val("") : "2" == b ? $("textarea", $(a)).val("") : "3" == b || "4" == b || "5" == b || "6" == b ? ($("input:hidden", $(a)).each(function() {
            $(this).val("")
        }), "3" == b ? ($(a).find("a.selected").removeClass("selected"), $(a).trigger("change")) : "4" == b ? ($("a[multiple].selected", $(a)).removeClass("selected"), $(a).trigger("change")) : ($(a).find("a.rate-off").removeClass("rate-on"), $(a).trigger("change"))) : "7" == b ? $("select", $(a)).val("") : "8" == b && $("input.range", $(a)).val("")
    }
};