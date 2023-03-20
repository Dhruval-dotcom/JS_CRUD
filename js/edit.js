let link = window.location.href;
str = link.substring(link.indexOf("=") + 1, link.length);
if (str[str.length - 1] == "#") str = str.substring(0, str.length - 1);
obj = JSON.parse(localStorage.getItem("obj" + str));

function objectid(ob) {
  return document.getElementById(ob);
}

namew = objectid("name");
namew.value = obj.name;

if (obj.gender == "Male") {
  objectid("male").checked = true;
} else {
  objectid("female").checked = true;
}

objectid("dob").value = obj.dob;

office = objectid("office");
office.value = obj.office;

residence = objectid("residence");
residence.value = obj.residence;

postal = objectid("postal");
postal.value = obj.postal;

mobile = objectid("mobile");
mobile.value = obj.mobile;

telephone = objectid("telephone");
telephone.value = obj.telephone;

email = objectid("email");
email.value = obj.email;

dept = obj.dept;
if (dept.indexOf("1") != -1) objectid("php").checked = true;

if (dept.indexOf("2") != -1) objectid("golang").checked = true;

if (dept.indexOf("3") != -1) objectid("python").checked = true;

if (dept.indexOf("4") != -1) objectid("nodejs").checked = true;

if (dept.indexOf("5") != -1) objectid("react").checked = true;

objectid("vehicle").value = obj.vehicle;

objectid("deptc").value = obj.deptc;

aadhar = objectid("aadhar");
aadhar.value = obj.aadhar;

vehicle_no = objectid("vehicle-no");
vehicle_no.value = obj.vehicleno;

bank_acc = objectid("bank-acc");
bank_acc.value = obj.bankacc;

debit = objectid("debit");
debit.value = obj.debit;

passport_no = objectid("passport-no");
passport_no.value = obj.passport;

col = objectid("color");
col.value = obj.color;

ran = objectid("ran");
ran.value = objectid("ranval").innerHTML = obj.skill;

gstin = objectid("gstin");
gstin.value = obj.gstin;

dl = objectid("dl");
dl.value = obj.dl;

account = objectid("account");
account.value = obj.acc;

credit = objectid("credit");
credit.value = obj.credit;

pan = objectid("pan");
pan.value = obj.pan;

objectid("blood-group").value = obj.bloodgroup;

namew_relative = objectid("name-relative");
namew_relative.value = obj.name_r;

mobile_relative = objectid("mobile-relative");
mobile_relative.value = obj.mobile_r;

telephone_relative = objectid("telephone-relative");
telephone_relative.value = obj.telephone_r;

relation_relative = objectid("relation-relative");
relation_relative.value = obj.relation_r;

function store(key, val) {
  localStorage.setItem(key, val);
}
function dst(st, msg, elem) {
  elem.focus();
  objectid(st).innerHTML = msg;
  objectid(st).style.display = "block";
}
function checkempty(st, msg, elem) {
  if (elem.value == "") {
    dst(st, msg, elem);
    return false;
  }
  return true;
}
function fun() {
  var req3 = objectid("req3");
  namew = objectid("name");
  if (namew.value == "") {
    dst("req3", "Enter name", namew);
    return false;
  } else {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    if (!regName.test(namew.value)) {
      dst(
        "req3",
        "Enter valid name in &lt;name&gt; &lt;surname&gt; format with no digits",
        namew
      );
      return false;
    } else {
      store("name", namew.value);
    }
  }
  if (
    objectid("male").checked == false &&
    objectid("female").checked == false
  ) {
    dst("req4", "Select Gender", objectid("male"));
    return false;
  } else {
    gender = objectid("male").checked ? "Male" : "Female";
    store("gender", gender);
  }

  dob = objectid("dob");
  if (dob.value == "") {
    dst("req9", "Select DOB", dob);
    return false;
  } else {
    dobval = dob.value.substring(0, 4);
    if (dobval > 2004) {
      dst("req9", "You are younger than 18 years", dob);
      return false;
    } else if (dobval <= 1923) {
      dst("req9", "This year not allowed", dob);
      return false;
    } else {
      store("dob", dob.value);
    }
  }

  office = objectid("office");
  if (office.value == "") {
    dst("req5", "please enter office address", office);
    return false;
  } else {
    store("office", office.value);
  }

  residence = objectid("residence");
  if (residence.value == "") {
    dst("req6", "please enter residence address", residence);
    return false;
  } else {
    store("residence", residence.value);
  }
  var regName = /^[a-zA-Z]+$/;
  postal = objectid("postal");
  if (postal.value == "") {
    dst("req7", "Enter Postal", postal);
    return false;
  } else {
    if (/^[0-9]+$/.test(postal.value) == false) {
      dst("req7", "Enter Postal number only in digit", postal);
      return false;
    } else {
      pn = parseInt(postal.value);
      if (pn < 100000 || pn > 999999) {
        if (pn < 100000) {
          x = 6 - postal.value.length;
          dst("req7", x.toString() + " digits remaining", postal);
          return false;
        } else if (pn > 999999) {
          dst("req7", "Exceeded length.Enter valid 6 digit postal", postal);
          return false;
        }
      } else {
        store("postal", postal.value);
      }
    }
  }

  mobile = objectid("mobile");
  if (mobile.value == "") {
    dst("req8", "Enter mobile", mobile);
    return false;
  } else {
    if (/^[0-9]+$/.test(mobile.value) == false) {
      dst("req8", "Enter mobile number only in digit", mobile);
      return false;
    } else {
      mn = parseInt(mobile.value);
      if (mn < 1000000000 || mn > 9999999999) {
        if (mn < 1000000000) {
          x = 10 - mobile.value.length;
          dst("req8", x.toString() + " digits remaining", mobile);
          return false;
        } else if (mn > 9999999999) {
          dst("req8", "Exceeded length.Enter valid 10 digit number", mobile);
          return false;
        }
      } else {
        store("mobile", mobile.value);
      }
    }
  }

  telephone = objectid("telephone");
  if (telephone.value == "") {
    dst("req10", "Enter telephone number", telephone);
    return false;
  } else {
    if (/^[0-9]+$/.test(telephone.value) == false) {
      dst("req10", "Enter telephone number only in digit", telephone);
      return false;
    } else {
      tn = parseInt(telephone.value);
      if (tn < 100000 || tn > 9999999999) {
        dst("req10", "Minimum 6 and max 10 digits allowed", telephone);
        return false;
      } else {
        store("telephone", telephone.value);
      }
    }
  }

  email = objectid("email");
  if (email.value == "") {
    dst("req11", "Please Enter email", email);
    return false;
  } else {
    var emailreg = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
    //var emailreg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailreg.test(email.value)) {
      dst("req11", "Please enter valid email", email);
      return false;
    } else {
      store("email", email.value);
    }
  }

  count =
    (objectid("php").checked == true ? "1" : "") +
    (objectid("golang").checked == true ? "1" : "") +
    (objectid("python").checked == true ? "1" : "") +
    (objectid("nodejs").checked == true ? "1" : "") +
    (objectid("react").checked == true ? "1" : "");
  if (count <= 2) {
    dst(
      "req12",
      "Please select atleast 2 domain of interest",
      objectid("golang")
    );
    return false;
  } else {
    depts =
      (objectid("php").checked == true ? "1" : "") +
      (objectid("golang").checked == true ? "2" : "") +
      (objectid("python").checked == true ? "3" : "") +
      (objectid("nodejs").checked == true ? "4" : "") +
      (objectid("react").checked == true ? "5" : "");
    store("dept", depts);
  }

  deptc = objectid("deptc").value;
  if (deptc == "") {
    dst("req26", "select department", objectid("deptc"));
    return false;
  } else {
    store("deptc", deptc);
  }
  col = objectid("color").value;
  store("col", col);

  ran = objectid("ran").value;
  store("ran", ran);

  blood_group = objectid("blood-group");
  if (blood_group.value == "-1") {
    dst("req15", "select correct bloog group", blood_group);
    return false;
  } else {
    store("blood-group", blood_group.value);
  }

  aadhar = objectid("aadhar");
  if (aadhar.value == "") {
    dst("req14", "Enter aadhar no", aadhar);
    return false;
  } else {
    if (/^[0-9]+$/.test(aadhar.value) == false) {
      dst("req14", "Enter mobile number only in digit", aadhar);
      return false;
    } else {
      an = parseInt(aadhar.value);
      if (an < 100000000000 || an > 999999999999) {
        if (an < 100000000000) {
          x = 12 - aadhar.value.length;
          dst("req14", x.toString() + " digits remaining", aadhar);
          return false;
        } else if (an > 999999999999) {
          dst("req14", "Exceeded length.Enter valid 12 digit number", aadhar);
          return false;
        }
      } else {
        store("aadhar", aadhar.value);
      }
    }
  }

  vehicle_no = objectid("vehicle-no");
  if (vehicle_no.value == "") {
    dst("req16", "Enter vehicle number", vehicle_no);
    return false;
  }
  var regv = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
  if (vehicle_no.value != "") {
    if (!regv.test(vehicle_no.value)) {
      dst(
        "req16",
        "Enter valid vehicle number in GJ07NF9999 format",
        vehicle_no
      );
      return false;
    } else {
      store("vehicle_no", vehicle_no.value);
    }
  }

  bank_acc = objectid("bank-acc");
  if (bank_acc.value == "") {
    dst("req17", "Enter bank name", bank_acc);
    return false;
  } else {
    store("bank-acc", bank_acc.value);
  }

  debit = objectid("debit");
  if (!debit.value) {
    dst("req18", "Enter Debit card no.", debit);
    return false;
  }
  if (debit.value != "") {
    if (/^[0-9]+$/.test(debit.value) == false) {
      dst("req18", "Debit card no. should be digits", debit);
      return false;
    } else {
      dn = parseInt(debit.value);
      if (dn < 100000000000 || dn > 999999999999) {
        if (dn < 100000000000) {
          x = 12 - debit.value.length;
          dst("req18", x.toString() + " digits remaining", debit);
          return false;
        } else if (dn > 999999999999) {
          dst("req18", "Exceeded length.Enter valid 12 digit number", debit);
          return false;
        }
      } else {
        store("debit", debit.value);
      }
    }
  }

  passport_no = objectid("passport-no");
  if (!passport_no.value) {
    dst("req19", "Enter passport no.", passport_no);
    return false;
  }
  if (passport_no.value != "") {
    if (/^[0-9]+$/.test(passport_no.value) == false) {
      dst("req19", "passport no. should be digits", passport_no);
      return false;
    } else {
      dn = parseInt(passport_no.value);
      if (dn < 100000000 || dn > 999999999) {
        if (dn < 100000000) {
          x = 9 - passport_no.value.length;
          dst("req19", x.toString() + " digits remaining", passport_no);
          return false;
        } else if (dn > 999999999) {
          dst(
            "req19",
            "Exceeded length.Enter valid 12 digit number",
            passport_no
          );
          return false;
        }
      } else {
        store("passport-no", passport_no.value);
      }
    }
  }

  fil = objectid("fil").value;
  if (!fil) {
    dst("req27", "Please select file", objectid("fil"));
    return false;
  }
  store("fil", fil);

  vehicle = objectid("vehicle");
  if (vehicle.value == "-1") {
    dst("req13", "Please select vehicle type", vehicle);
    return false;
  } else {
    store("vehicle", vehicle.value);
  }

  gstin = objectid("gstin");
  if (!gstin.value) {
    dst("req20", "Enter gstin", gstin);
    return false;
  }
  var regdl = /^[A_Za-z0-9]{15}$/;
  if (gstin.value != "") {
    if (!regdl.test(gstin.value)) {
      x = 15 - gstin.value.length;
      if (x < 0) {
        dst("req20", "length exceeded max 15 allowed", gstin);
      } else {
        dst("req20", x.toString() + " more character needed (max 15)", gstin);
      }
      return false;
    } else {
      store("gstin", gstin.value);
    }
  }

  dl = objectid("dl");
  if (!dl.value) {
    dst("req21", "Enter driving licence number", dl);
    return false;
  }
  var regdl = /^[A_Za-z0-9]{15}$/;
  if (dl.value != "") {
    if (!regdl.test(dl.value)) {
      x = 15 - dl.value.length;
      if (x < 0) {
        dst("req21", "length exceeded max 15 allowed", dl);
      } else {
        dst("req21", x.toString() + " more character needed (max 15)", dl);
      }
      return false;
    } else {
      store("dl", dl.value);
    }
  }

  acc = objectid("account");
  var accreg = /^[0-9]{8,14}$/;
  if (acc.value == "") {
    dst("req22", "please Enter Acc number", acc);
    return false;
  } else {
    accreg2 = /^[0-9]+$/;
    if (!accreg2.test(acc.value)) {
      dst("req22", "account number should be in digit", acc);
      return false;
    } else {
      if (!accreg.test(acc.value)) {
        dst("req22", "account number should be of length 8 to 14", acc);
        return false;
      } else {
        store("account", acc.value);
      }
    }
  }

  credit = objectid("credit");
  if (credit.value == "") {
    dst("req23", "Enter credit number", credit);
    return false;
  }
  var credreg = /^[0-9]{12}$/;
  if (credit.value != "") {
    if (!credreg.test(credit.value)) {
      dst("req23", "credit number should be 12 digit long", credit);
      return false;
    } else {
      store("credit", credit.value);
    }
  }

  pan = objectid("pan");
  var panreg = /^[0-9]{10}$/;
  if (pan.value != "") {
    if (!panreg.test(pan.value)) {
      dst("req24", "PAN no should be 10 digit long should be only digit", pan);
      return false;
    } else {
      store("pan", pan.value);
    }
  } else {
    dst("req24", "Enter pan number", pan);
    return false;
  }

  namew_relative = objectid("name-relative").value;
  if (!namew_relative) {
    dst("req28", "Enter name-relative", objectid("name-relative"));
    return false;
  }
  store("name-relative", namew_relative);

  mobile_relative = objectid("mobile-relative");
  if (!mobile_relative.value) {
    dst("req29", "Enter mobile", mobile_relative);
    return false;
  }
  if (mobile_relative.value != "") {
    if (/^[0-9]+$/.test(mobile_relative.value) == false) {
      dst("req29", "Enter mobile number only in digit", mobile_relative);
      return false;
    } else {
      mn = parseInt(mobile_relative.value);
      if (mn < 1000000000 || mn > 9999999999) {
        if (mn < 1000000000) {
          x = 10 - mobile_relative.value.length;
          dst("req29", x.toString() + " digits remaining", mobile_relative);
          return false;
        } else if (mn > 9999999999) {
          dst(
            "req29",
            "Exceeded length.Enter valid 10 digit number",
            mobile_relative
          );
          return false;
        }
      } else {
        store("mobile-relative", mobile_relative.value);
      }
    }
  }

  telephone_relative = objectid("telephone-relative");
  if (telephone_relative.value != "") {
    if (/^[0-9]+$/.test(telephone_relative.value) == false) {
      dst("req30", "Enter telephone number only in digit", telephone_relative);
      return false;
    } else {
      tn = parseInt(telephone_relative.value);
      if (tn < 100000 || tn > 9999999999) {
        dst("req30", "Minimum 6 and max 10 digits allowed", telephone_relative);
        return false;
      } else {
        store("telephone-relative", telephone_relative.value);
      }
    }
  } else {
    dst("req30", "Enter telephone", telephone_relative);
    return false;
  }

  relation_relative = objectid("relation-relative").value;
  if (!relation_relative) {
    dst("req31", "Enter relation", objectid("relation-relative"));
    return false;
  }
  store("relation-relative", relation_relative);
  if (namew.value == namew_relative && mobile.value == mobile_relative.value) {
    if (
      confirm(
        "You entered same data of yours and relatives you want to move ahead ??then press Ok to go ahead"
      )
    ) {
    }
  }

  idcount = localStorage.getItem("idcount");
  if (idcount === null) {
    idcount = 1;
  }

  var obj2 = {
    name: namew.value,
    gender: gender,
    dob: dob.value,
    office: office.value,
    residence: residence.value,
    postal: postal.value,
    mobile: mobile.value,
    telephone: telephone.value,
    email: email.value,
    dept: depts,
    deptc: deptc,
    color: col,
    bloodgroup: blood_group.value,
    aadhar: aadhar.value,
    vehicleno: vehicle_no.value,
    bankacc: bank_acc.value,
    debit: debit.value,
    passport: passport_no.value,
    skill: ran,
    vehicle: vehicle.value,
    gstin: gstin.value,
    dl: dl.value,
    acc: acc.value,
    credit: credit.value,
    pan: pan.value,
    name_r: namew_relative,
    mobile_r: mobile_relative.value,
    telephone_r: telephone_relative.value,
    relation_r: relation_relative,
  };

  localStorage.setItem("obj" + str.toString(), JSON.stringify(obj2));
}
function reqfun(obj) {
  objectid(obj).style.display = "none";
}
function funchange() {
  objectid("ranval").innerHTML = objectid("ran").value;
}

let myPromise = new Promise(function (myResolve, myReject) {
  document.querySelector("#fil").addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      myResolve(reader.result);
    });
    reader.readAsDataURL(this.files[0]);
  });
});

myPromise.then(function (value) {
  localStorage.setItem("img" + str.toString(), value);
});
