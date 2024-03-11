function Order() {
        let value = $('#q1').val();
          if (value == ''){
            alert('Please fill out the details!');
          } else {
              alert('Order Placed');
          }

        }

        function Cancel() {
            alert('Your Order has been Cancelled!!');
        }

        function open_box1(){
          var y = document.getElementById('main');
          y.style.opacity = '0.5';
          $('#good1').show()
          $('#index-q1').empty()
          $.ajax({
            type: "GET",
            url: "https://api.manana.kr/exchange/rate.json?base=INR&code=INR,USD",
            data: {},
            success: function(response){
              
              let dates = response;
              
              
                  let day = dates[1]['name']
                  let avg = dates[1]['rate']
                  
                    
                  let temp_html = `<li>&#36;1 = &#8377;${avg} </li>`
                    $('#index-q1').append(temp_html)
                
              
          }
        })
        }
        
        function close_box1(){
          var y = document.getElementById('main');
          y.style.opacity = '0.5';
          var y = document.getElementById('main');
          y.style.opacity = '1';
          $('#good1').hide()
        }

        function function1(e)
          {
              event.preventDefault();
            
              swal("Your order is complete!", "Thank you!", "success");
              
              
          }
          
          function red1(){
            
            var data1 = document.getElementById('Username1').value;
            var data2 = document.getElementById('Quantity1').value;
            var data3 = document.getElementById('Address1').value;
            var data4 = document.getElementById('Number1').value;
            if(data1=="" || data2=="" || data3==""||data4=="")
            {
              alert("Please fill out ~");
              
            }
          }
  
  
  
  
  