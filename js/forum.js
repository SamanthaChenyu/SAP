function Validateform(theForm)
{
   var regexp;
   if (theForm.customer_name.value == "")
   {
      alert("請輸入姓！");
      theForm.customer_name.focus();
      return false;
   }
   if (theForm.n_2.value == "")
   {
      alert("請輸入名！");
      theForm.n_2.focus();
      return false;
   }
   if (theForm.n_3.selectedIndex < 0)
   {
         alert("請選擇稱謂！");
         theForm.n_3.focus();
         return false;
   }
   if (theForm.n_3.selectedIndex == 0)
   {
         alert("請選擇稱謂！");
         theForm.n_3.focus();
         return false;
   }
   if (theForm.company_name.value == "")
   {
      alert("請輸入公司名稱！");
      theForm.company_name.focus();
      return false;
   }
   regexp = /^09[0-9]{8}$/;
   if (!regexp.test(theForm.mobile.value))
   {
      alert("請輸入正確之手機號碼！（輸入範例：0988123456）");
      theForm.mobile.focus();
      return false;
   }
   if ($(".no").is(':visible'))
   {
      alert("該資料已存在");
      theForm.mobile.focus();
      return false;
   }
   if (theForm.mobile.value == "")
   {
      alert("請輸入正確之手機號碼！（輸入範例：0988123456）");
      theForm.mobile.focus();
      return false;
   }
   regexp = /^([0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z])*\.)+[a-z]{2,6})$/i;
   if (!regexp.test(theForm.email.value))
   {
      alert("請輸入正確格式之電子郵件！（輸入範例：xxx@xxx.xxx）");
      theForm.email.focus();
      return false;
   }
   if (theForm.email.value == "")
   {
      alert("請輸入正確格式之電子郵件！（輸入範例：xxx@xxx.xxx）");
      theForm.email.focus();
      return false;
   }
   if (theForm.n_7.selectedIndex < 0)
   {
         alert("請選擇部門名稱！");
         theForm.n_7.focus();
         return false;
   }
   if (theForm.n_7.selectedIndex == 0)
   {
         alert("請選擇部門名稱！");
         theForm.n_7.focus();
         return false;
   }
   if (theForm.title_type.selectedIndex < 0)
   {
         alert("請選擇職位名稱！");
         theForm.title_type.focus();
         return false;
   }
   if (theForm.title_type.selectedIndex == 0)
   {
         alert("請選擇職位名稱！");
         theForm.title_type.focus();
         return false;
   }
   if (theForm.n_9.selectedIndex < 0)
   {
         alert("請選擇是否願意收到SAP關於此資訊透過【E-mail】的額外資料！");
         theForm.n_9.focus();
         return false;
   }
   if (theForm.n_9.selectedIndex == 0)
   {
         alert("請選擇是否願意收到SAP關於此資訊透過【E-mail】的額外資料！");
         theForm.n_9.focus();
         return false;
   }
   if (theForm.n_10.selectedIndex < 0)
   {
         alert("請選擇是否願意收到SAP關於此資訊透過【電話】的額外資料！");
         theForm.n_10.focus();
         return false;
   }
   if (theForm.n_10.selectedIndex == 0)
   {
         alert("請選擇是否願意收到SAP關於此資訊透過【電話】的額外資料！");
         theForm.n_10.focus();
         return false;
   }
   // if (theForm.city_o.selectedIndex < 0)
   // {
   //       alert("請填寫地址！");
   //       theForm.city_o.focus();
   //       return false;
   // }
   // if (theForm.city_o.selectedIndex == 0)
   // {
   //       alert("請輸入地址！");
   //       theForm.city_o.focus();
   //       return false;
   // }
   // if (theForm.address_o.value == "")
   // {
   //    alert("請填寫完整地址！");
   //    theForm.address_o.focus();
   //    return false;
   // }
   // var sex_selected = false;
   // for (i = 0; i < theForm.sex.length; i++)
   // {
   //       if (theForm.sex[i].checked)
   //          sex_selected = true;
   // }
   // if (!sex_selected)
   // {
   //       alert("請選擇性別！");
   //       return false;
   // } 
   // if (theForm.date_year_6.value == "")
   // {
   //    alert("請輸入出生年份！");
   //    theForm.date_year_6.focus();
   //    return false;
   // }
   // if (theForm.date_month_6.selectedIndex < 0)
   // {
   //       alert("請輸入出生月份！");
   //       theForm.date_month_6.focus();
   //       return false;
   // }
   // if (theForm.date_month_6.selectedIndex == 0)
   // {
   //       alert("請輸入出生月份！");
   //       theForm.date_month_6.focus();
   //       return false;
   // }
   // if (theForm.date_day_6.selectedIndex < 0)
   // {
   //       alert("請輸入出生日期！");
   //       theForm.date_day_6.focus();
   //       return false;
   // }
   // if (theForm.date_day_6.selectedIndex == 0)
   // {
   //       alert("請輸入出生日期！");
   //       theForm.date_day_6.focus();
   //       return false;
   // }
   if (theForm.is_mkt.checked != true)
   {
      alert("請勾選我已詳細閱讀並同意注意事項/個資聲明！");
      return false;
   }
   keypress();      
}

