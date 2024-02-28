document.getElementById("enter").onkeyup = function() {checkChar()};
function checkChar() {
  let key =  document.getElementById("enter").value;
  if (key.value !=="") {
  // Checking space
  if (/\s+/.test(key)) {
    document.getElementById("messageSpace").value = "No space there";
    document.getElementById("messageSpace").style.color = "brown";
  } else {
    document.getElementById("messageSpace").value = "";
  // Checking character numbers
    if (key.length > 7) {
      document.getElementById("message2").value = "Password is 8 characters or more";
      document.getElementById("message2").style.color = "navy";
    } else {
      document.getElementById("message2").value = "Password is less 8 than charcters";
      document.getElementById("message2").style.color = "rgb(250, 111, 25)";
    }
    // Checking character complexity
    if (/^[0-9]+$/.test(key) || /^[A-Za-z]+$/.test(key)) {
      document.getElementById("enter").style.boxShadow = "0 0 30px rgb(255, 2, 2)";
      document.getElementById("confirm").style.boxShadow = "0 0 30px rgb(255, 2, 2)";
      document.getElementById("pz1").style.marginTop = "-28px";
      document.getElementById("pz1").style.marginLeft = "40px";
      document.getElementById("pz2").style.marginTop = "-34px";
      document.getElementById("pz2").style.marginLeft = "172px";
      document.getElementById("pz3").style.marginTop = "-30px";
      document.getElementById("pz3").style.marginLeft = "242px";
      document.getElementById("pz4").style.marginTop = "-44px";
      document.getElementById("pz4").style.marginLeft = "409px";
      document.getElementById("pz5").style.marginTop = "27px";
      document.getElementById("pz5").style.marginLeft = "513px";
      document.getElementById("pz6").style.marginTop = "48px";
      document.getElementById("pz6").style.marginLeft = "46px";
      document.getElementById("pz10").style.marginTop = "89px";
      document.getElementById("pz10").style.marginLeft = "507px";
      document.getElementById("pz11").style.marginTop = "87px";
      document.getElementById("pz11").style.marginLeft = "12px";
      document.getElementById("pz15").style.marginTop = "93px";
      document.getElementById("pz15").style.marginLeft = "561px";
      document.getElementById("pz26").style.marginTop = "322px";
      document.getElementById("pz26").style.marginLeft = "20px";
      document.getElementById("pz31").style.marginTop = "388px";
      document.getElementById("pz31").style.marginLeft = "72px";
      document.getElementById("pz32").style.marginTop = "377px";
      document.getElementById("pz32").style.marginLeft = "168px";
      document.getElementById("pz33").style.marginTop = "404px";
      document.getElementById("pz33").style.marginLeft = "243px";
      document.getElementById("pz34").style.marginTop = "357px";
      document.getElementById("pz34").style.marginLeft = "408px";
      document.getElementById("pz35").style.marginTop = "328px";
      document.getElementById("pz35").style.marginLeft = "536px";
      document.getElementById("word").value = "Weak";
      document.getElementById("word").style.color = "rgb(255, 2, 2)";
    } else if (/^[0-9a-zA-Z]+$/.test(key)) {
      document.getElementById("enter").style.boxShadow = "0 0 30px rgb(0, 116, 194)";
      document.getElementById("confirm").style.boxShadow = "0 0 30px rgb(0, 116, 194)";
      document.getElementById("pz1").style.marginTop = "-5px";
      document.getElementById("pz1").style.marginLeft = "81px";
      document.getElementById("pz2").style.marginTop = "-6px";
      document.getElementById("pz2").style.marginLeft = "181px";
      document.getElementById("pz3").style.marginTop = "-3px";
      document.getElementById("pz3").style.marginLeft = "242px";
      document.getElementById("pz4").style.marginTop = "-7px";
      document.getElementById("pz4").style.marginLeft = "376px";
      document.getElementById("pz5").style.marginTop = "-1px";
      document.getElementById("pz5").style.marginLeft = "471px";
      document.getElementById("pz6").style.marginTop = "61px";
      document.getElementById("pz6").style.marginLeft = "79px";
      document.getElementById("pz10").style.marginTop = "63px";
      document.getElementById("pz10").style.marginLeft = "474px";
      document.getElementById("pz11").style.marginTop = "84px";
      document.getElementById("pz11").style.marginLeft = "74px";
      document.getElementById("pz15").style.marginTop = "82px";
      document.getElementById("pz15").style.marginLeft = "472px";
      document.getElementById("pz26").style.marginTop = "306px";
      document.getElementById("pz26").style.marginLeft = "80px";
      document.getElementById("pz31").style.marginTop = "332px";
      document.getElementById("pz31").style.marginLeft = "72px";
      document.getElementById("pz32").style.marginTop = "356px";
      document.getElementById("pz32").style.marginLeft = "179px";
      document.getElementById("pz33").style.marginTop = "321px";
      document.getElementById("pz33").style.marginLeft = "243px";
      document.getElementById("pz34").style.marginTop = "319px";
      document.getElementById("pz34").style.marginLeft = "378px";
      document.getElementById("pz35").style.marginTop = "319px";
      document.getElementById("pz35").style.marginLeft = "475px";
      document.getElementById("word").value = "Good";
      document.getElementById("word").style.color = "rgb(0, 116, 194)";
    } else if (/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g.test(key)) {
      var elements = document.getElementsByClassName("pz");
      for (var i = 0; i < elements.length; i++) { elements[i].style.filter = "grayscale(0%)";}
      document.getElementById("enter").style.boxShadow = "0 0 30px rgb(0, 194, 13)";
      document.getElementById("confirm").style.boxShadow = "0 0 30px rgb(0, 194, 13)";
      document.getElementById("pz1").style.marginTop = "0px";
      document.getElementById("pz1").style.marginLeft = "83px";
      document.getElementById("pz2").style.marginTop = "0px";
      document.getElementById("pz2").style.marginLeft = "180px";
      document.getElementById("pz3").style.marginTop = "0px";
      document.getElementById("pz3").style.marginLeft = "241px";
      document.getElementById("pz4").style.marginTop = "0px";
      document.getElementById("pz4").style.marginLeft = "371px";
      document.getElementById("pz5").style.marginTop = "0px";
      document.getElementById("pz5").style.marginLeft = "468px";
      document.getElementById("pz6").style.marginTop = "58px";
      document.getElementById("pz6").style.marginLeft = "83px";
      document.getElementById("pz10").style.marginTop = "58px";
      document.getElementById("pz10").style.marginLeft = "468px";
      document.getElementById("pz11").style.marginTop = "83px";
      document.getElementById("pz11").style.marginLeft = "83px";
      document.getElementById("pz15").style.marginTop = "86px";
      document.getElementById("pz15").style.marginLeft = "469px";
      document.getElementById("pz26").style.marginTop = "294px";
      document.getElementById("pz26").style.marginLeft = "83px";
      document.getElementById("pz31").style.marginTop = "317px";
      document.getElementById("pz31").style.marginLeft = "83px";
      document.getElementById("pz32").style.marginTop = "352px";
      document.getElementById("pz32").style.marginLeft = "180px";
      document.getElementById("pz33").style.marginTop = "318px";
      document.getElementById("pz33").style.marginLeft = "242px";
      document.getElementById("pz34").style.marginTop = "318px";
      document.getElementById("pz34").style.marginLeft = "374px";
      document.getElementById("pz35").style.marginTop = "318px";
      document.getElementById("pz35").style.marginLeft = "468px";
      document.getElementById("word").value = "Strong";
      document.getElementById("word").style.color = "rgb(0, 194, 13)";
    } else {
      document.getElementById("pz1").style.marginTop = "-63px";
      document.getElementById("pz1").style.marginLeft = "22px";
      document.getElementById("pz2").style.marginTop = "-46px";
      document.getElementById("pz2").style.marginLeft = "162px";
      document.getElementById("pz3").style.marginTop = "-38px";
      document.getElementById("pz3").style.marginLeft = "270px";
      document.getElementById("pz4").style.marginTop = "-100px";
      document.getElementById("pz4").style.marginLeft = "420px";
      document.getElementById("pz5").style.marginTop = "-50px";
      document.getElementById("pz5").style.marginLeft = "551px";
      document.getElementById("pz6").style.marginTop = "58px";
      document.getElementById("pz6").style.marginLeft = "4px";
      document.getElementById("pz10").style.marginTop = "60px";
      document.getElementById("pz10").style.marginLeft = "580px";
      document.getElementById("pz11").style.marginTop = "134px";
      document.getElementById("pz11").style.marginLeft = "-27px";
      document.getElementById("pz15").style.marginTop = "122px";
      document.getElementById("pz15").style.marginLeft = "592px";
      document.getElementById("pz26").style.marginTop = "322px";
      document.getElementById("pz26").style.marginLeft = "-12px";
      document.getElementById("pz31").style.marginTop = "396px";
      document.getElementById("pz31").style.marginLeft = "3px";
      document.getElementById("pz32").style.marginTop = "393px";
      document.getElementById("pz32").style.marginLeft = "161px";
      document.getElementById("pz33").style.marginTop = "427px";
      document.getElementById("pz33").style.marginLeft = "243px";
      document.getElementById("pz34").style.marginTop = "407px";
      document.getElementById("pz34").style.marginLeft = "429px";
      document.getElementById("pz35").style.marginTop = "346px";
      document.getElementById("pz35").style.marginLeft = "573px";
    }
  }

  document.getElementById("confirm").onkeyup = function() {myFunction()};
  function myFunction() {
    if (document.getElementById("confirm").value === document.getElementById("enter").value) {
      document.getElementById("message").value = "Passwords do match";
      document.getElementById("message").style.color = "green";
    } else {
      document.getElementById("message").value = "Passwords do not match";
      document.getElementById("message").style.color = "red";
    }
  }
}
}

const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#enter');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});