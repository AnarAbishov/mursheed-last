$(document).ready(function() {
  let startDate = $("#startDate")[0];
  let endDate = $("#endDate")[0];

  $(endDate).change(function() {
    let dateStart = new Date(startDate.value);
    let dateEnd = new Date(endDate.value);

    let Difference_In_Time = dateEnd.getTime() - dateStart.getTime();
    let betweenData = Difference_In_Time / (1000 * 3600 * 24);

    let toDay = new Date().toLocaleDateString().substring(0, 2);

    if (dateStart < dateEnd && toDay <= dateStart.getDate()) {
      $(".select_price_info").remove();
      $(endDate).css("border-color", "#8292a2");
      $(startDate).css("border-color", "#8292a2");

      let dateStartNew = new Date(startDate.value);
      var countDate = 0;
      for (let index = 0; index < betweenData + 1; index++) {
        
        if (countDate == 0) {
            let dateItems = dateStartNew.setDate(
                new Date(dateStartNew).getDate() + countDate
              );
              countDate = 1;
              var dateItemsNew = new Date(dateItems).toLocaleDateString();
        } else {
            let dateItems = dateStartNew.setDate(
                new Date(dateStartNew).getDate() + 1
              );
             
              var dateItemsNew = new Date(dateItems).toLocaleDateString();
        }
        

        var structure = [
          '<div class="select_price_info">',
          '<div class="select_price_info_item">',
          `<p>${dateItemsNew}</p>`,
          "</div>",
          '<div class="select_price_info_item ">',
          '<div class="custom-selectbox">',
          "<select>",
          '<option value="0">All cities</option>',
          '<option value="1">Baku</option>',
          '<option value="2">Qazax</option>',
          '<option value="3">Ganja</option>',
          '<option value="4">Shaki</option>',
          "</select>",
          "</div>",
          "</div>",
          '<div class="select_price_info_item">',
          '<div class="custom-selectbox">',
          '<select name="" id="">',
          '<option value="">10:00</option>',
          '<option value="">11:00</option>',
          '<option value="">12:00</option>',
          "</select>",
          "</div>",
          "</div>",
          '<div class="select_price_info_item">',
          '<div class="custom-selectbox">',
          "<select>",
          '<option value="0">All cities</option>',
          '<option value="1">Baku</option>',
          '<option value="2">Qazax</option>',
          '<option value="3">Ganja</option>',
          '<option value="4">Shaki</option>',
          "</select>",
          "</div>",
          "</div>",
          '<div class="select_price_info_item">',
          '<img src="./img/driver_price/group-5.svg" alt="">',
          "</div>",
          '<div class="select_price_info_item">',
          "<span>100$</span>",
          "</div>",
          "</div>"
        ];

        $(structure.join("")).appendTo($(".select_price"));
      }
    } else {
      $(".select_price_info").remove();
      $(endDate).css("border-color", "red");
      $(startDate).css("border-color", "red");
    }
    let is_select_price_info = $(".select_price_info")[0];
    if (is_select_price_info) {
      var x, i, j, selElmnt, a, b, c;
      /*look for any elements with the class "custom-selectbox":*/
      x = document.getElementsByClassName("custom-selectbox");
      for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
          /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                for (k = 0; k < y.length; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
          });
          b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
          /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });
      }
      function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
    except the current select box:*/
        var x,
          y,
          i,
          arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
          if (elmnt == y[i]) {
            arrNo.push(i);
          } else {
            y[i].classList.remove("select-arrow-active");
          }
        }
        for (i = 0; i < x.length; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
          }
        }
      }
      /*if the user clicks anywhere outside the select box,
then close all select boxes:*/
      document.addEventListener("click", closeAllSelect);
    }
  });
});
