$(document).ready(function(){
  Alist = [];
  Blist = [];
  // Common Patient SNPs
  var times = 11501;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Alist.push(ra+rb+rc+rn)
  }
  // dnSNP
  var times = 89744;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Blist.push(ra+rb+rc+rn)
  }
  // common
  var times = 1011;
  for(var i=0; i < times; i++){
    ra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rb = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rc = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rn = Math.floor(Math.random()*900000) + 100000;
    Alist.push(ra+rb+rc+rn)
    Blist.push(ra+rb+rc+rn)
  }
  $('#jvenn-container').jvenn({
    series: [
      {
        name: "Common Patient SNPs",
        data: Alist
      },
      {
        name: "dbSNP",
        data: Blist
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
