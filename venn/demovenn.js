$(document).ready(function(){
  $('#jvenn-container').jvenn({
    series: [
      {
        name: "Liver carcinoma",
        data: ["TP53", "PIK3CA", "AXIN1", "MET", "APC", "MYC", "CTNNB1", "CDKN2A", "IGF2R", "CASP8", "MICA", "STAT4", "AFP", "PDGFRL", "IGF2", "PTGS2", "PTK2", "TGFA", "GNMT", "SKP2", "FOXM1", "CCNE1", "ABCB4", "NR1H4", "IQGAP2", "A2M", "GSTM1", "IL6", "TGFB1", "MMP9", "TERT", "BIRC5", "GPC3", "TNFSF10", "GSTP1", "CCND1", "CDKN1B", "EGFR", "HGF"]
      },
      {
        name: "Prostate carcinoma",
        data: ["KLK3", "AR", "TP53", "ERG", "PSAT1", "PLAG1", "PROS1", "NPEPPS", "KCNH2", "PTEN", "TMPRSS2", "BCL2", "FOLH1", "IL6", "VEGFA", "EGFR", "GSTP1", "ESR1", "PCA3", "ERBB2", "BRCA2", "BRCA1", "PTGS2", "HIF1A", "IGF1", "INS", "PIK3CA", "PIK3CB", "PIK3CG", "PIK3CD", "TNF", "HPGDS", "AKT1", "SRD5A2", "CYP17A1", "EGF", "NKX3", "STAT3", "EZH2", "MMP9", "RNASEL", "CYP27B1", "VDR", "IGFBP3", "CD44", "CLU", "MYC", "GSTM1", "AMACR", "ESR2", "MSMB", "MAPK1", "NFKB1", "ELAC2", "CCND1", "CXCL8", "GSTT1", "MMP2", "CDKN1A", "SRD5A1", "PPARG", "CAV1", "CDKN1B", "IGF1R", "TSC1"]
      },
      {
        name: "Breast Carcinoma",
        data: ["BRCA1", "BRCA2", "EGFR", "ERBB2", "ESR1", "PGR", "TP53", "CCND1", "VEGFA", "PIK3CA", "BCL2", "EGF", "ATM", "INS", "IGF1", "PIK3CG", "PTGS2", "PIK3CB", "PIK3CD", "ABCB1", "AR", "CHEK2", "PTEN", "MUC1", "CD44", "TSC1", "CYP19A1", "FGFR2", "ESR2", "AKT1", "MMP9", "PCNA", "TNF", "TBC1D9", "PRL", "STAT3", "CXCR4", "MYC", "HIF1A", "PALB2", "CYP1A1", "CYP2D6", "CDKN2A", "PARP1", "IL6", "GSTM1", "KRT19", "COX2", "COMT", "MDM2", "NFKB1", "MTHFR", "NCOA3"]
      },
      {
        name: "Colorectal Carcinoma",
        data: ["BRAF", "APC", "PIK3CA", "CDH1", "SMAD7", "KRAS", "MLH1", "TP53", "TGFB1", "MSH2", "CTNNB1", "RHPN2", "TCF7L2", "GREM1", "COLCA1", "COX1", "SLC22A3", "COLCA2", "VTI1A", "CCND2", "LAMA5", "PDGFRL", "TBX3", "POLD3", "CCAT2", "SRSF10P2", "ACOXL", "NXN", "HSPA12A", "ZMIZ1", "LIMA1", "B9D2", "CABLES2", "BICC1", "MYNN", "MYRF", "GATA3", "LAMC1", "TYMS", "EGFR"]
      },
      {
        name: "Lung Carcinoma",
        data: ["SLC22A18", "KRAS", "BRAF", "PPP2R1B", "MXRA5", "XPC", "FOXM1", "ROBO1", "EGFR", "FGF9", "TP53", "GSTM1", "CYP1A1", "ALK", "CDKN2A", "GSTT1", "VEGFA", "XRCC1", "ERBB2", "PTGS2", "HPGDS", "EGF", "TERT", "BCL2", "ERCC2", "FHIT", "OGG1", "CHRNA5", "GSTP1", "PIK3CA", "SLCO6A1", "GSTK1", "CCND1", "IL6", "MET", "TSC1", "RASSF1", "STAT3", "TNF", "CYP2E1"]
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

      $('#myModalLabel').html("Genes for "+groups.join(", "));
      $('#myModalBody').html(genes.join("<br>"));
      $('#myModal').modal('show');
    }
  });
});
