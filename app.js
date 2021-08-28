// Tulis kode di bawah ini

// membuat objek
const kucing = {
     rasKucing : "kampung",
     umurKucing : 5,
     kondisi : true,
     tubuhKucing : ['mata','badan','ekor','kepala','kumis','kaki'],
     kelaminKucing : 2,
     
     cekKondisi : function(){
          if(this.kondisi === true){
               return 'kucing sehat';
          } else {
               return 'kucing sakit';
          }
     },
     cekRas : function(){
          if (this.rasKucing !== ""){
               return 'kucing biasa'
          }
          else{
               return 'kucing langka';
          }
     },
     badanKucing : function(){
          return `tubuh kucing terdiri dari ${this.tubuhKucing}`;
     },

     umur : function(){
          return `umur kucing ini ${this.umurKucing} bulan`;
     },
     kelamin : function(){
          if(this.kelaminKucing === 2){
               return `kucing berkelamin jantan`;
          } else {
               return `kucing berkelamin betina`
          }
     } 
}
// memanggil objek
console.log('===== OBJEK =====');
console.log(kucing.cekKondisi());
console.log(kucing.cekRas());
console.log(kucing.badanKucing());
console.log(kucing.umur())
console.log(kucing.kelamin());


// membuat class
class hewan{
 constructor(nama,ras,umur,kondisi,tubuh,kelamin) {
      this.nama = nama;
      this.ras = ras;
      this.umur = umur;
      this.kelamin = kelamin;
      this.tubuh = tubuh;
      this.kondisi = kondisi;
 }

 keadaan(){
     if(this.kondisi === true){
          return 'kucing sehat';
     } else {
          return 'kucing sakit';
     }
}
jenis(){
     if (this.rasKucing !== ""){
          return 'kucing biasa'
     }
     else{
          return 'kucing langka';
     }
}
badan(){
     return `tubuh kucing terdiri dari ${this.tubuhKucing}`;
}

usia(){
     return `umur kucing ini ${this.umurKucing} bulan` ;
}
gender(){
     if(this.kelamin === 2){
          return `kucing berkelamin jantan`
     } else {
          return `kucing berkelamin betina`
     }
} 

 
}
// memanggil class

let oyen = new hewan('kucing','anggora',5,true,'kepala,badan,ekor,kaki,kumis,mata,mulut,hidung,telinga','jantan');
console.log(oyen);