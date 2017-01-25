$(document).ready(function(){
  Alist = []; // Neurodegenerative
  Blist = []; // Filtered patient SNPs
  Clist = []; // Drug targeted
  Dlist = []; // Heart disease
  // Neurodegenerative
  var times = 1157;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Alist.push(ra+rb+rc+rn)
  }
  // Filtered patient SNPs
  var times = 11501;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Blist.push(ra+rb+rc+rn)
  }
  // Drug targeted
  var times = 384;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Clist.push(ra+rb+rc+rn)
  }
  // Heart disease
  var times = 2478;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Dlist.push(ra+rb+rc+rn)
  }
  //
  //
  // Filtered patient SNPs - Neurodegenerative
  var times = 21;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Blist.push(ra+rb+rc+rn)
    Alist.push(ra+rb+rc+rn)
  }
  // Filtered patient SNPs - Heart disease
  var times = 57;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Blist.push(ra+rb+rc+rn)
    Dlist.push(ra+rb+rc+rn)
  }
  // Filtered patient SNPs - Drug targeted
  var times = 4;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Blist.push(ra+rb+rc+rn)
    Clist.push(ra+rb+rc+rn)
  }
  //
  // Drug targeted - Neurodegenerative
  var times = 13;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Clist.push(ra+rb+rc+rn)
    Alist.push(ra+rb+rc+rn)
  }
  // Drug targeted - Heart disease
  var times = 31;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Clist.push(ra+rb+rc+rn)
    Dlist.push(ra+rb+rc+rn)
  }
  //
  // Neurodegenerative - Heart disease
  var times = 24;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Alist.push(ra+rb+rc+rn)
    Dlist.push(ra+rb+rc+rn)
  }
  //
  //
  var times = 1;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Blist.push(ra+rb+rc+rn)
    Clist.push(ra+rb+rc+rn)
    Alist.push(ra+rb+rc+rn)
  }
  //
  var times = 1;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Blist.push(ra+rb+rc+rn)
    Clist.push(ra+rb+rc+rn)
    Dlist.push(ra+rb+rc+rn)
  }

  $('#jvenn-container').jvenn({
    series: [
      {
        name: "Neurodegenerative",
        data: Alist
      },
      {
        name: "Filtered patient SNPs",
        data: Blist
      },
      {
        name: "Drug targeted",
        data: Clist
      },
      {
        name: "Heart disease",
        data: Dlist
      }
    ],
    displayStat: true,
    fnClickCallback: function() {
      groups = [];
      for (name in this.listnames) {
         groups.push(this.listnames[name]);
      }
      genes = [];
      for (val in this.list) {
        genes.push(this.list[val]);
      }

      $('#myModalLabel').html("Common SNPs in: "+groups.join(", "));
      $('#myModalBody').html(genes.join("<br>"));
      $('#myModal').modal('show');
    }
  });
});
