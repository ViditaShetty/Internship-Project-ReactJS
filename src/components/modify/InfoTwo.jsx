import React from 'react';
import './infoone.css';
import { useState,useRef,useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';


const InfoTwo = () => {  

   var questionNum=34;
   var answer=34;
   var i=0;
   const[format2,setFormat2]=useState(['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']);
   const dict={
    "one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9,"ten":10,"eleven":11,"twelve":12,"thirteen":13,
    "fourteen":14,"fifteen":15,"sixteen":16,"seventeen":17,"eighteen":18,"nineteen":19,"twenety":20,

    "1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":16,"17":17,
    "18":18,"19":19,"20":20
   }

    const ALAN_KEY=`85a6b036ed0de194225179d1669074772e956eca572e1d8b807a3e2338fdd0dc/stage`;
    useEffect(() => {
      alanBtn({
          key: '85a6b036ed0de194225179d1669074772e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: (commandData) => {
           if(commandData.command==='feedback'){
              //setFormat2(...format2,commandData.data)
              console.log("question number is============",commandData.value.value);
              console.log("question number type is============",typeof(commandData.value.value));
              
              if(dict[commandData.value.value]){
                questionNum=dict[commandData.value.value];
              }
              else{
                questionNum=commandData.value.value;}
           }

           if(commandData.command==='feedbak'){
            //setFormat2(...format2,commandData.data)
            answer=commandData.value.value;
            format2[questionNum-1]=answer;
            setFormat2(
              format2.map((f)=>{
                if(i==questionNum-1){
                    i=i+1;
                   return {...format2,answer};
                }
                else{
                  i=i+1;
                  return {...format2};
                }
              })
            )
           }


          }
      });
      
      console.log("&&&&&&&&&&&&&&&&&",format2);
    }, []);


    const handleCat = (e) => {
      format2[34]="0";
      //setChangee(Math.random())
    };

    const [Mic,setMIC]=useState(true);
  

  
  return (
    <div  style={{overflowX:"hidden"}}>
      {/*<!--===============================PART 2 WITH MIC======================--!> */}

      {Mic && (
      <div className='general' style={{maxWidth:"70vw"}} id="partTwo">
      <i className="icon-grid"></i>
        <span onClick={()=>setMIC(true)} style={{fontWeight:"bolder",cursor:"pointer"}}>
        {'\u00A0'}{'\u00A0'}Customer Information -2 ( Use MIC for filling form using speech <i className='icon-microphone'></i> )
        </span>

        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}

        <i className="icon-grid"></i>
        <span onClick={()=>setMIC(false)}  style={{cursor:"pointer"}}>
        {'\u00A0'}{'\u00A0'}Customer Information -2 (Manually)
        </span>


        <div className="userShow ">
        <form className="addProductForm">

        <div className="column_one">
            <div className="addProductItem">
            <label>1. Practicing Age Of Doctors (in years)	</label>
            <input type="text" onChange={handleCat} placeholder="say 'answer1 is...' "  value={Object.values(format2[0][0] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>2. Age Of Doctors (in years)	</label>
            <input type="text" placeholder="say 'answer2 is...'" onChange={handleCat} value={Object.values(format2[0][1] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>3. SEGMENT</label>
            <input type="text" placeholder="say 'answer3 is...' " onChange={handleCat} value={Object.values(format2[0][2] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>4. How Many Times Met by MR in Last 6 months	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][3] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>5. How Many Times Met by AM in Last 6 months	How Many Times Met</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][4] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>6. How Many Times Met by RM in Last 6 months{'<'}	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][5] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>7. How Many Mass Input is Given in Last 6 months</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][6] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>8. No. of Diabetes Patients Seen in a month	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][7] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>9. No. of Patients with Hypertension Seen in a month	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][8] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>10. No. of Patients with Heart Failure Seen in a month	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][9] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>11. How many months RCPA done in last 6 months for potential?	</label>
            <input type="text" placeholder="" onChange={handleCat}value={Object.values(format2[0][10] ||{}) } />
            </div>
            <div className="addProductItem">
            <label>12. Potential for prescribing Anti-diabetes therapy in value	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][11] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>13. Potential for prescribing Anti-hypertensive therapy in value	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][12] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>14. Potential for prescribing heart failure therapy in value	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][13] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>15. Which molecules(Direct & Indirect) is he prescribing?	</label>
            <input type="text" placeholder="" onChange={handleCat}value={Object.values(format2[0][14] ||{}) } />
            </div>
            <div className="addProductItem">
            <label>16. Is he a existing prescriber?	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][15] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>17. Which focused brands is he prescribing?	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][16] ||{}) }/>
            </div>     
     </div>
     <div className="column_two">
            <div className="addProductItem">
            <label>18. How many months RCPA done in last 6 months for our prescribing brand?	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][17] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>19. What is the value of RCPA current focused brands in last 6 months?	</label>
            <input type="text" placeholder="" onChange={handleCat}value={Object.values(format2[0][18] ||{}) } />
            </div>
            <div className="addProductItem">
            <label>20. FY 21-22 GCRM Done?	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][19] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>21. FY 21-22 Type of Activity	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][20] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>22. FY 21-22 Activity Month	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][21] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>23. FY 21-22 Investment Amount Value	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][22] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>24. FY 22-23 Type of Activity	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][23] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>25. FY 22-23 Investment Amount Value	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][24] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>26. FY 22-23 Activity Month	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][25] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>27. FY 22-23 Purpose of Doing Activity	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][26] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>28. If maintainence how many focused brand SKU is he prescribing?	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][27] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>29. If consolidation which focused brand will be added to the doctor?	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][28] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>30. If conversion which focused brand will the doctor be converted to?	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][29] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>31. Highest supporter of(company?) Give options for top 3 companies	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][30] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>32. Highest supportr of(company?) Give options for top 3 companies	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][31] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>33. Value given to highest supporter in Rs?	</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][32] ||{}) }/>
            </div>
            <div className="addProductItem">
            <label>34. Which hospital is the doctor affiliated with?</label>
            <input type="text" placeholder="" onChange={handleCat} value={Object.values(format2[0][33] ||{}) }/>
            </div>
            
            <div className="addProductItem">
            <label>Actions</label>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#" style={{color:"white"}} >  Add Customer      </a>{'\u00A0'}{'\u00A0'}
            </button>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#" style={{color:"white"}} >   View or Delete Current List       </a>{'\u00A0'}{'\u00A0'}
            </button><br/>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#partThree" style={{color:"white"}} > Next  <i className='icon-arrow-down'></i>    </a>{'\u00A0'}{'\u00A0'}
            </button>
            </div>

        </div>
      </form>
    </div>
     </div>
      )}

      {/*<!--========================= PART 2 MANUAL( WITHOUT MIC)======================--!> */}

   {!Mic && (
     <div className='general' style={{maxWidth:"70vw"}} id="partTwo">
     <i className="icon-grid"></i>
        <span onClick={()=>setMIC(true)}  style={{cursor:"pointer"}}>
        {'\u00A0'}{'\u00A0'}Customer Information -2 ( Use MIC for filling form using speech <i className='icon-microphone'></i> )
        </span>

        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}

        <i className="icon-grid"></i>
        <span onClick={()=>setMIC(false)}  style={{fontWeight:"bolder",cursor:"pointer"}}>
        {'\u00A0'}{'\u00A0'}Customer Information -2 (Manually)
        </span>
     
       <div className="userShow ">
        <form className="addProductForm">

        <div className="column_one">
            <div className="addProductItem">
            <label>1. Practicing Age Of Doctors (in years)	</label>
            <input type="text" onChange={handleCat} placeholder=" "  />
            </div>
            <div className="addProductItem">
            <label>2. Age Of Doctors (in years)	</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>3. SEGMENT</label>
            <input type="text" placeholder=" " onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>4. How Many Times Met by MR in Last 6 months	</label>
            <select name="brand" id="brand">
                              <option value="40012066"> 1</option>
                              <option value="40000575"> 2</option>
                              <option value="40012064"> 3</option>
                              <option value="40000775"> 4</option>                  
                              <option value="4001209">  5</option>
                              <option value="40000585"> 6</option>
             </select>
            </div>
            <div className="addProductItem">
            <label>5. How Many Times Met by AM in Last 6 months</label>
            <select name="brand" id="brand">
                              <option value="40012066"> 1</option>
                              <option value="40000575"> 2</option>
                              <option value="40012064"> 3</option>
                              <option value="40000775"> 4</option>                  
                              <option value="4001209">  5</option>
                              <option value="40000585"> 6</option>
             </select>
            </div>
            <div className="addProductItem">
            <label>6. How Many Times Met by RM in Last 6 months{'<'}	</label>
            <select name="brand" id="brand">
                              <option value="40012066"> 1</option>
                              <option value="40000575"> 2</option>
                              <option value="40012064"> 3</option>
                              <option value="40000775"> 4</option>                  
                              <option value="4001209">  5</option>
                              <option value="40000585"> 6</option>
             </select>            </div>
            <div className="addProductItem">
            <label>7. How Many Mass Input is Given in Last 6 months</label>
            <select name="brand" id="brand">
                              <option value="40012066"> 1</option>
                              <option value="40000575"> 2</option>
                              <option value="40012064"> 3</option>
                              <option value="40000775"> 4</option>                  
                              <option value="4001209">  5</option>
                              <option value="40000585"> 6</option>
             </select>
            </div>
            <div className="addProductItem">
            <label>8. No. of Diabetes Patients Seen in a month	</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>9. No. of Patients with Hypertension Seen in a month	</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>10. No. of Patients with Heart Failure Seen in a month	</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>11. How many months RCPA done in last 6 months for potential?	</label>
            <select name="brand" id="brand">
                              <option value="40012066"> 1</option>
                              <option value="40000575"> 2</option>
                              <option value="40012064"> 3</option>
                              <option value="40000775"> 4</option>                  
                              <option value="4001209">  5</option>
                              <option value="40000585"> 6</option>
             </select>
             </div>
            <div className="addProductItem">
            <label>12. Potential for prescribing Anti-diabetes therapy in value	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>13. Potential for prescribing Anti-hypertensive therapy in value	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>14. Potential for prescribing heart failure therapy in value	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>15. Which molecules(Direct & Indirect) is he prescribing?	</label>
                    <select name="brand" id="brand">
                                    <option value="40012066"> ATECARD -D (N) 15 TABS</option>
                                    
                                    <option value="40000575"> ATECARD 25 14 TABS</option>
                                    
                                    <option value="40007048"> ATECARD 25 MG 14 TABS</option>
                                    
                                    <option value="40000576"> ATECARD 50 14 TABS</option>
                                    
                                    <option value="40009523"> ATECARD 50 MG 14 TABS</option>
                                    
                                    <option value="40000581"> ATECARD AM 14 TABS</option>
                                    
                                    <option value="40012065"> ATECARD AM 15 TABS</option>
                                    
                                    <option value="40000580"> ATECARD D 14 TABS</option>
                                    
                                    <option value="40006004"> Atecard 50mg 14 Tabs</option>
                                    
                                    <option value="40009268"> Atecard 50mg 14 Tabs</option>
                                    
                                    <option value="50001768"> DUBATRAN 110 10 CAPS</option>
                                    
                                    <option value="50001769"> DUBATRAN 150 10 CAPS</option>
                                    
                                    <option value="50001767"> DUBATRAN 75 10 CAPS</option>
                                    
                                    <option value="50001388"> ETERNEX - T Tablets 10TABS</option>
                                    
                                    <option value="50001441"> ETERNEX M 1000 10 TABS</option>
                                    
                                    <option value="50001442"> ETERNEX M 500 10 TABS</option>
                                    
                                    <option value="40004057"> GLISEN 1 TAB 10 S</option>
                                    
                                    <option value="40007049"> GLISEN 2 10 TABS</option>
                                    
                                    <option value="40004058"> GLISEN 2 TAB 10 S</option>
                                    
                                    <option value="50000370"> GLISEN 2 TABLET 10 TAB</option>
                                    
                                    <option value="50001600"> GLISEN MF 1 MG 15 TABS</option>
                                    
                                    <option value="50001887"> GLISEN MF FORTE 2 15 TABS</option>
                                    
                                    <option value="50002012"> GLISEN PM -2 15 TABS</option>
                                    
                                    <option value="50001800"> GLISEN VM 1/0.3 MG 10 TABS</option>
                                    
                                    <option value="50001801"> GLISEN VM 2/0.3 MG 10 TABS</option>
                                    
                                    <option value="50001003"> GLISEN VM1 10 TABS</option>
                                    
                                    <option value="50001004"> GLISEN VM2 10 TABS</option>
                                    
                                    <option value="40005016"> Glisen MF 1 mg  10 Tab</option>
                                    
                                    <option value="40005017"> Glisen MF 2 mg  10 Tab</option>
                                    
                                    <option value="40005239"> Glisen MF Forte 1 10 Tab</option>
                                    
                                    <option value="40005240"> Glisen MF Forte 2 10 Tab</option>
                                    
                                    <option value="40005020"> Glisen PM 1 mg 10 tab</option>
                                    
                                    <option value="40005021"> Glisen PM 2 mg 10 tab</option>
                                    
                                    <option value="50001587"> KINPHOS 10 TABS</option>
                                    
                                    <option value="40000573"> METOFIX- XL 1000 10 S TAB</option>
                                    
                                    <option value="40009377"> METOFIX-XL 1000 (N) 10</option>
                                    
                                    <option value="40012903"> METOFIX-XL 1000 MG 15 TAB</option>
                                    
                                    <option value="40006005"> Metofix XL 500 10 S Tab</option>
                                    
                                    <option value="40009269"> Metofix XL 500 10 S Tab</option>
                                    
                                    <option value="40009369"> TELLZY 20 15 TABS</option>
                                    
                                    <option value="40011438"> TELLZY 20 MG 15 TABS</option>
                                    
                                    <option value="40009370"> TELLZY 40 15 TABS</option>
                                    
                                    <option value="40011437"> TELLZY 40 MG 15 TABS</option>
                                    
                                    <option value="40009371"> TELLZY 80 15 TABS</option>
                                    
                                    <option value="40009667"> TELLZY 80 AM 15 TAB</option>
                                    
                                    <option value="40011436"> TELLZY 80 MG 15 TABS</option>
                                    
                                    <option value="50001879"> TELLZY ACH 40/5/12.5  10 TABS</option>
                                    
                                    <option value="50001878"> TELLZY ACH 40/5/6.25 10 TABS</option>
                                    
                                    <option value="50001881"> TELLZY ACH 80/5/12.5 10 TABS</option>
                                    
                                    <option value="50001880"> TELLZY ACH 80/5/6.25 10 TABS</option>
                                    
                                    <option value="50001884"> TELLZY AM 15 TABS</option>
                                    
                                    <option value="50001591"> TELLZY AM 15 TABS</option>
                                    
                                    <option value="40006535"> TELLZY AM 15 TABS</option>
                                    
                                    <option value="50001889"> TELLZY CH 40 MG 15 TAB</option>
                                    
                                    <option value="40009202"> TELLZY CH 40 MG 15 TAB</option>
                                    
                                    <option value="40009223"> TELLZY CH 6.25 MG 15 TAB</option>
                                    
                                    <option value="40009203"> TELLZY CH 80 MG 15 TAB</option>
                                    
                                    <option value="40012773"> TELLZY RS 15 TAB</option>
                                    
                                    <option value="40009682"> TELLZY RS 15 TAB</option>
                                    
                                    <option value="50000755"> TELLZY-AH 10 TABLETS</option>
                                    
                                    <option value="40000604"> TELLZY-H 10 TABS</option>
                                    
                                    <option value="50000732"> TELLZY-MT 25 10 TAB</option>
                                    
                                    <option value="40009184"> TELLZY-MT 25 10 TAB</option>
                                    
                                    <option value="50002018"> TELLZY-MT 25 15 TAB</option>
                                    
                                    <option value="40010746"> TELLZY-MT 25 MG 15 TAB</option>
                                    
                                    <option value="50000733"> TELLZY-MT 50 10 TAB</option>
                                    
                                    <option value="40009185"> TELLZY-MT 50 10 TAB</option>
                                    
                                    <option value="40010747"> TELLZY-MT 50 MG 15 TAB</option>
                                    
                                    <option value="50001892"> TELLZY-MT 50 MG 15 TAB</option>
                                    
                                    <option value="40005840"> Tellzy 40 15Tab</option>
                                    
                                    <option value="40005842"> Tellzy 80 15Tab</option>
                                    
                                    <option value="50000861"> Tellzy 80 AM 10 s</option>
                                    
                                    <option value="40004562"> Tellzy 80 H 10tab</option>
                                    
                                    <option value="50000864"> Tellzy CH 40 10 s</option>
                                    
                                    <option value="50001270"> Tellzy CH 6.25</option>
                                    
                                    <option value="50000865"> Tellzy CH 80 10 S</option>
                                    
                                    <option value="50000806"> Tellzy RS 10 tab</option>
                                    
                                    <option value="50002145"> VOAGE - M 10/1000</option>
                                    
                                    <option value="50002143"> VOAGE - M 10/500</option>
                                    
                                    <option value="50002146"> VOAGE - M 5/1000</option>
                                    
                                    <option value="50002233"> VOAGE MS 1000</option>
                                    
                                    <option value="50002232"> VOAGE MS 500</option>
                                    
                                    <option value="50002223"> VOAGE- S 15 TAB</option>
                                    
                    </select>
            </div>
            <div className="addProductItem">
            <label>16. Is he a existing prescriber?	</label>
            <select name="brand" id="brand">
                              <option value="40012066"> YES</option>
                              <option value="40000575"> NO</option>
             </select>
            </div>
            <div className="addProductItem">
            <label>17. Which focused brands is he prescribing?	</label>
            <select name="brand" id="brand">
                              <option value="40012066"> TELLYZ</option>
                              <option value="40000575"> TELLYZ AM</option>
                              <option value="40012064"> TELLYZ CH</option>
                              <option value="40000775"> TELLYZ MT</option>                  
                              <option value="4001209">  VOAGE</option>
                              <option value="40000585"> VOAGE V</option>
                              <option value="40000785"> VOAGE M</option>
             </select>
             </div>     
     </div>
     <div className="column_two">
            <div className="addProductItem">
            <label>18. How many months RCPA done in last 6 months for our prescribing brand?	</label>
            <select name="brand" id="brand">
                              <option value="40012066"> 1</option>
                              <option value="40000575"> 2</option>
                              <option value="40012064"> 3</option>
                              <option value="40000775"> 4</option>                  
                              <option value="4001209">  5</option>
                              <option value="40000585"> 6</option>
             </select>
             </div>
            <div className="addProductItem">
            <label>19. What is the value of RCPA current focused brands in last 6 months?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>20. FY 21-22 GCRM Done?	</label>
            <select name="brand" id="brand">
                              <option value="40012066"> YES</option>
                              <option value="40000575"> NO</option>
             </select>
              </div>
            <div className="addProductItem">
            <label>21. FY 21-22 Type of Activity	</label>
            <select name="brand" id="brand">
                      <option value="empty"> </option>
                      <option value="NA">Not Applicable</option>
                      <option value="Instrument">Instrument</option>
                      <option value="Book">Book</option>
                      <option value="Conference">Conference</option>
                      <option value="Amplee">Amplee</option>
                      <option value="Samplee">Samplee</option>
                      <option value="Fellowship">Fellowship</option>
                       <option value="Journal">Journal</option>
                       <option value="Membership">Membership</option>
             </select>
             </div>
            <div className="addProductItem">
            <label>22. FY 21-22 Activity Month	</label>
            <select name="brand" id="brand">
                      <option value="empty"> </option>
                      <option value="NA">Not Applicable</option>
                      <option value="Apr_21">April 21</option>
                      <option value="May_21">May 21</option>
                      <option value="Jun_21">June 21</option>
                      <option value="Jul_21">July 21</option>
                      <option value="Aug_21">August 21</option>
                      <option value="Sept_21">September 21</option>
                      <option value="Oct_21">October 21</option>
                      <option value="Nov_21">November 21</option>
                      <option value="Dec_21">December 21</option>
                      <option value="Jan_21">January 22</option>
                      <option value="Feb_21">February 22</option>
                      <option value="Mar_21">March 22</option>
             </select>
              </div>
            <div className="addProductItem">
            <label>23. FY 21-22 Investment Amount Value	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>24. FY 22-23 Type of Activity	</label>
            <select name="brand" id="brand">
                    <option value="empty"> </option>
                    <option value="Survey">Survey</option>
                    <option value="Advocacy">Advocacy</option>
                    <option value="CME">CME</option>
                    <option value="RTM">RTM</option>
                    <option value="Conference">Conference</option>
                    <option value="Apmlee">Amplee</option>
             </select>
            </div>
            <div className="addProductItem">
            <label>25. FY 22-23 Investment Amount Value	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>26. FY 22-23 Activity Month	</label>
            <select name="brand" id="brand">
                  <option value="empty"> </option>
                  <option value="Apr_22">April 22</option>
                  <option value="May_22">May 22</option>
                  <option value="Jun_22">June 22</option>
                  <option value="Jul_22">July 22</option>
                  <option value="Aug_22">August 22</option>
                  <option value="Sept_22">September 22</option>
                  <option value="Oct_22">October 22</option>
                  <option value="Nov_22">November 22</option>
                  <option value="Dec_22">December 22</option>
                  <option value="Jan_23">January 23</option>
                  <option value="Feb_23">February 23</option>
                  <option value="Mar_23">March 23</option>
             </select>
            </div>
            <div className="addProductItem">
            <label>27. FY 22-23 Purpose of Doing Activity	</label>
            <select name="brand" id="brand">
                            <option value="empty"> </option>
                            <option value="Maintainence">Maintainence</option>
                            <option value="Multiproduct_prescriber">Multiproduct Prescriber</option>
                            <option value="New_conversion">New Conversion</option>
				</select>
             </div>
            <div className="addProductItem">
            <label>28. If maintainence how many focused brand SKU is he prescribing?	</label>
            <select name="brand" id="brand">
                            <option value="empty"> </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
             </select>
            </div>
            <div className="addProductItem">
            <label>29. If consolidation which focused brand will be added to the doctor?	</label>
            <select name="brand" id="brand">
                          <option value="empty"> </option>
                          <option value="Tellzy">Tellzy</option>
                          <option value="Tellzy_AM">Tellzy AM</option>
                          <option value="Tellzy_CH">Tellzy CH</option>
                          <option value="Tellzy_MT">Tellzy MT</option>
                          <option value="Voage">Voage</option>
                          <option value="Voage_M">Voage M</option>
                          <option value="Voage_V">Voage V</option>
             </select>
            </div>
            <div className="addProductItem">
            <label>30. If conversion which focused brand will the doctor be converted to?	</label>
            <select name="brand" id="brand">
                        <option value="empty"> </option>
                        <option value="Tellzy">Tellzy</option>
                        <option value="Tellzy_AM">Tellzy AM</option>
                        <option value="Tellzy_CH">Tellzy CH</option>
                        <option value="Tellzy_MT">Tellzy MT</option>
                        <option value="Voage">Voage</option>
                        <option value="Voage_M">Voage M</option>
                        <option value="Voage_V">Voage V</option>
             </select>
            </div>
            <div className="addProductItem">
            <label>31. Highest supporter of(company?) Give options for top 3 companies	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>32. Highest supportr of(company?) Give options for top 3 companies	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>33. Value given to highest supporter in Rs?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>34. Which hospital is the doctor affiliated with?</label>
            <select name="brand" id="brand">
                      <option value="empty"> </option>
                      <option value="Private">Private Own Clinic/Hospital</option>
                      <option value="Polyclinic">Polyclinic</option>
                      <option value="Corporate">Corporate</option>
             </select>
            </div>
            
            <div className="addProductItem">
            <label>Actions</label>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#" style={{color:"white"}} >  Add Customer      </a>{'\u00A0'}{'\u00A0'}
            </button>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#" style={{color:"white"}} >   View or Delete Current List       </a>{'\u00A0'}{'\u00A0'}
            </button><br/>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#partThree" style={{color:"white"}} > Next  <i className='icon-arrow-down'></i>    </a>{'\u00A0'}{'\u00A0'}
            </button>
            </div>

        </div>
      </form>
    </div>
     </div>
   )}

    </div>
  )
}

export default InfoTwo