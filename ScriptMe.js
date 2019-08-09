 var duration;
    var clnt=[];
    var fever=['Sweating','Shivering','Headache','Muscleache','Body Weakness','Cold','Slight Chillz'];
    var SoreThroat1=['Cough','Muscleache','Headache','Muffled Voice','Running Nose','Nausea','Pain during Swallowing','Hoarseness in Voice'];
    var Bronchitis=['Cough','Fatigue','Shortness of Breath','Chest Discomfort','Blood In Cough','Running Nose','Hoarseness in Voice'];
    var CommonCold=['Sore Throat','Cough','Congestion','Mild Headache','Sneezing','Cold'];
    var Cough1=['Hoarseness in Voice','Shortness of Breath','Running Nose','Sore Throat','Fever','Thick Yellow Mucus'];
    var Flu=['Fever','Cough','Sore Throat','Running Nose','Body Weakness','Headache','Fatigue'];
    var Typhoid=['Peritonitis','Star','Abdominal Pain','Fatigue'];
    var DengueFever=['Fatigue','Abdominal Pain','Vomiting','Mild Headache','Cold','Sudden Weight Loss','Body Weakness','Sneezing'];
    var Malaria=['Nausea','Headache','Vomiting','Anemia','Night Sweats','Body Weakness','Fatigue'];


    var i=0;
    var cnt1=0,cnt2=0,cnt3=0,cnt4=0,cnt5=0,cnt6=0,cnt7=0,cnt8=0,cnt9=0;
    var msg=document.getElementById("msg");
    function ClientList()
    {
        clnt[i++]=event.target.value;
    }
    function Sub1(){
        duration=event.target.parentElement.dur.value;
        if(duration>2)
        {
            msg.innerHTML="It is Major Suggestion for you to please Visit Nearest Doctor for Checkup!!!";
        }
        else if(clnt.length!=0)
        {
                for(var y in clnt)
                {
                    if(fever.indexOf(clnt[y])!=-1)
                    {
                        cnt1++;
                    }
                    if(SoreThroat1.indexOf(clnt[y])!=-1)
                    {
                        cnt2++;
                    }
                    if(Bronchitis.indexOf(clnt[y])!=-1)
                    {
                        cnt3++;
                    }
                    if(CommonCold.indexOf(clnt[y])!=-1)
                    {
                        cnt4++;
                    }
                    if(Cough1.indexOf(clnt[y])!=-1)
                    {
                        cnt5++;
                    }
                    if(Flu.indexOf(clnt[y])!=-1)
                    {
                        cnt6++;
                    }
                    if(Typhoid.indexOf(clnt[y])!=-1)
                    {
                        cnt7++;
                    }
                    if(DengueFever.indexOf(clnt[y])!=-1)
                    {
                        cnt8++;
                    }
                    if(Malaria.indexOf(clnt[y])!=-1)
                    {
                        cnt9++;
                    }
                }
            var max=Math.max(cnt1,cnt2,cnt3,cnt4,cnt5,cnt6,cnt7,cnt8,cnt9);  
            switch(max)
            {
                case cnt1:
                    msg.innerHTML="You Have Common Fever Which can be Cured by taking these Prescriptions - Paracetamol. "+"<br>"+"Generic Name:   paracetamol (oral/rectal) (par RA cet a MOL)"+"<br>"+" Alternate Name: acetaminophen"+"<br>"+"Try to reach Doctor when patient is feeling lack of Consiouness"; 
                    break;
                case cnt2:
                    msg.innerHTML="You Have common Illness - Sore Throat which can be cured by taking these prescriptions - Chloraseptic(Phenol Oral Spray and Rinse)"+"<br>"+"Generic Name: Phenol Oral Spray and Rinse (FEE nole)"+"<br>"+"Brand Name: Chloraseptic Acetaminophen (Tylenol) or ibuprofen (Advil or Motrin)";
                    break;
                case cnt3:
                    msg.innerHTML="You Have common Illness - BRONCHITIS which can be cured by taking these prescriptions- Azithromycin 3 Day Dose Pack."+"<br>"+"Generic Name: azithromycin (a ZITH roe MYE sin)."+"<br>"+"Brand Name: Azithromycin 3 Day Dose Pack, Azithromycin 5 Day Dose Pack, Zithromax, Zithromax TRI-PAK, Zithromax Z-Pak, Zmax";
                    break;
                case cnt4:
                     msg.innerHTML="You Have common Illness - Common Cold which can be cured by taking these prescriptions- benadryl,Cetirizine,Diphenhydramine.Generic Name: diphenhydramine (DYE fen HYE dra meen)"+"<br>"+"Brand Names: Allergy Relief, Allermax, Banophen, Benadryl, Compoz Nighttime Sleep Aid, Diphedryl, Diphenhist, Dytuss, Nytol QuickCaps, PediaCare Children's Allergy, Q-Dryl, QlearQuil Nightitme Allergy Relief, Quenalin, Scot-Tussin Allergy Relief Formula, Siladryl Allergy, Silphen Cough, Simply Sleep, Sleepinal, Sominex, Tranquil, Twilite, Unisom Sleepgels Maximum Strength, Valu-Dryl, Vanamine PD, Z-Sleep, ZzzQuil, plus many others";
                     break;
                case cnt5:
                    msg.innerHTML="You Have common Illness - COUGH which can be cured by taking these prescriptions- benadryl,Benzonatate"+"<br>"+"Generic Name: benzonatate (ben ZOE na tate)"+"<br>"+"Brand Names: Tessalon, Tessalon Perles, Zonatuss";
                    break;
                case cnt6:
                    msg.innerHTML="You Have common Illness - Influenza which can be cured by taking these prescriptions- Tamiflu"+"<br>"+"Generic Name: oseltamivir (os el TAM ih veer)"+"<br>"+"Brand Names: Tamiflu";
                    break;
                case cnt7:
                    msg.innerHTML="You Have - Typhoid which can be cured by taking these prescriptions- Ciprofloxacin"+"<br>"+"Please Visit Nearest Doctor for better Treatment";
                    break;
                case cnt8:
                    msg.innerHTML="You Have - DengueFever."+"<br>"+"No vaccine can protect against dengue fever.Only avoiding mosquito bites can prevent it."+"<br>"+"Please Visit Nearest Doctors Clinic as soon as Possible";
                    break;
                case cnt9:
                    msg.innerHTML="You Have - Malaria which can be cured by taking these prescriptions - chloroquine, quinine, mefloquine, halofantrine, pyrimethamine, sulfadoxine, sulfones, tetracyclines etc."+"<br>"+"Please Visit Nearest Doctors Clinic for Better Treatment As Malaria can be Dangerous";
                    break;
                default:{
                    msg.innerHTML="It is Major Suggestion for you to please Visit Nearest Doctor for Checkup!!!";  
                    break;
                }
            }
                
        }
        else{
            msg.innerHTML="Select Symptoms Before Submitting!!!";
        }
    }