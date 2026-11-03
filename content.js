/* ==================== STUDY 1 SURVEY CONTENT ====================
   AI Decision Substitution — Study 1 (Paper 1, Experiment)
   Source:  03_Instruments/Questionnaire_ALL_080726.md  (Study 1 Questionnaire)
   Design:  02_ResearchDesign/ResearchDesign_Paper1_Experiment_080226.md  5.1
   Built:   2026-08-31

   Design: 3 (substitution: SELF / AIM / AIT) x 2 (identity relevance: LOW / HIGH)
           between-subjects, 6 cells, N = 480 (80 per cell).
           One condition per participant. No part-order factor.
   ================================================================ */

/* ==================== STIMULUS SLOTS ====================
   Drop the final PNGs into img/ under these four names and nothing else
   in this file has to change. Current files are PROVISIONAL copies from
   04_Stimuli and are pending CarryForward A1 / A2 / A6 / A13.            */
const STIM = {
  BANNER:   "img/S1_stage0_banner.png",   // shared by all three conditions
  SELF:     "img/S1_cond_self.png",       // search filters + result list
  AI_MULTI: "img/S1_cond_aimulti.png",    // 4 recommendation cards
  AI_TOP:   "img/S1_cond_aitoppick.png"   // 1 recommendation card
};
/* ======================================================== */

/* ---------- scales ---------- */
const AGREE = ["Strongly<br>disagree", "Disagree", "Slightly<br>disagree",
               "Neither disagree<br>nor agree", "Slightly<br>agree", "Agree",
               "Strongly<br>agree"];

const AGREE_STEM  = "Please indicate how much you agree with each statement.";
const AGREE_STEM1 = "Please indicate how much you agree with the statement.";

const INSTR = '<p class="instr">Please read the following situation carefully and imagine it ' +
              'as vividly as you can, as if it were really happening to you.</p>';

/* ==================== CONSENT ==================== */
const CONSENT_HTML = `
<h2>Informed Consent</h2>
<p>You are invited to participate in a short research study. The purpose of this study is to evaluate how consumers perceive information presented in a restaurant related mobile app. If you volunteer to participate, you will view app information and a short scenario, and then complete a survey in which you make ratings based on the information provided. The survey will take about 10 minutes of your time. About 390 people will take part in this study. There will not be direct benefits to you as a participant in this study. This study includes only minimal risks although there are risks involved in all research studies. You may feel uncomfortable when answering some of the questions. You may discontinue participation at any time. There will not be a financial cost to you to participate in this study. Compensation, including a small payment if you are screened out, is provided by Prolific as shown on the study page. Your participation in this study is voluntary. You may refuse to participate in this study or in any part of this study without any consequences.</p>
<p>All information gathered in this study will be kept completely confidential. No personally identifiable information will be collected, and your responses will be recorded under an anonymous code. No reference will be made in written or oral materials that could link you to this study. All records will be stored in a locked facility at Kyonggi University located in South Korea for 3 years after completion of the study. After the storage time, the information gathered will be completely discarded.</p>
<p>If you have any questions or concerns about the study, you may contact Dr. Eun Joo Kim at <a href="mailto:ejkim@kyonggi.ac.kr">ejkim@kyonggi.ac.kr</a>. For questions about your rights as a participant, you may contact the Kyonggi University Institutional Review Board at +82-31-249-1504. If you agree to participate, please
continue with the survey. If you do not wish to participate, please decline by selecting
&ldquo;I do not consent.&rdquo;</p>
<p><strong>I have read the above information and agree to participate in this study. I have been
able to ask questions about the research study. I am an adult over 18 years old.</strong></p>`;

/* ==================== FACTORS ==================== */
const SUB_CONDS = ["SELF", "AIM", "AIT"];   // self / AI-multi / AI-toppick
const IR_CONDS  = ["LOW", "HIGH"];          // ordinary dinner / celebration dinner

/* ==================== STAGE 0 ====================
   Occasion manipulation. Both texts fix the companion and the time frame and
   differ only in the symbolic weight of the occasion (ResearchDesign 5.1).
   Neither text names who chooses the restaurant, and neither says whether the
   evening will be memorable.                                                  */
const IR_TEXT = {
  LOW:  "It is a regular Tuesday. Nothing in particular is happening today. You do not feel " +
        "like cooking, so you decide to go out for dinner with someone close to you.",
  HIGH: "Something worth celebrating came up today, and you want to mark it tonight rather " +
        "than let it pass. You decide to go out for dinner with someone close to you."
};

const STAGE0_APP_HTML =
  '<p class="scenario">So, you open a restaurant information mobile app (e.g., Yelp, OpenTable, ' +
  'Google Maps) to find a place to eat. On the app&rsquo;s first screen, a banner to advertise ' +
  'AI recommendation appears.</p>' +
  '<img class="stim" src="' + STIM.BANNER + '" alt="App first screen with AI banner">';

/* Substitution manipulation. "what you like" vs "what you would like" separates
   self-knowledge from algorithmic inference without using effort vocabulary. */
const SUB_STIM = {
  SELF: '<p class="scenario">You skip past the banner and go to the search screen. The list you ' +
        'end up looking at is one <strong>you</strong> put together, from what you like based on ' +
        'your own experience.</p>' +
        '<img class="stim" src="' + STIM.SELF + '" alt="Search result screen">',
  AIM:  '<p class="scenario">You tap the banner. The list you end up looking at is one ' +
        '<strong>the app</strong> put together, from what you would like based on your past ' +
        'preferences.</p>' +
        '<img class="stim" src="' + STIM.AI_MULTI + '" alt="AI recommendation screen">',
  AIT:  '<p class="scenario">You tap the banner. The list you end up looking at is one ' +
        '<strong>the app</strong> put together, from what you would like based on your past ' +
        'preferences.</p>' +
        '<img class="stim" src="' + STIM.AI_TOP + '" alt="AI recommendation screen">'
};

/* ==================== STAGE 2 / STAGE 3 BRIDGES ==================== */
const STAGE2_HTML =
  '<p class="scenario">You settle on a restaurant from what was on your screen previously shown ' +
  'and tap through to book a table for the evening.</p>';

const STAGE3_HTML = INSTR +
  '<p class="scenario">Take a moment and picture the evening as if it were really happening to ' +
  'you.</p>' +
  '<p class="scenario">You arrive a few minutes before your reservation. The host has your name ' +
  'ready and walks you to a table by the window. The room is lit low, and there is enough space ' +
  'between the tables that you can hear the person across from you without raising your voice. ' +
  'Your order is taken within a couple of minutes.</p>' +
  '<p class="scenario">The first dish reaches the table about ten minutes later, still steaming. ' +
  'It comes plated the way it looked in the photo on the app, and the portion covers the plate. ' +
  'The person across from you stops mid-sentence at the first bite and asks what is in it. The ' +
  'second dish arrives while the first is still warm, and the server sets down a small plate ' +
  'from the kitchen that you did not order. Your water glass is refilled before you notice it ' +
  'is empty.</p>' +
  '<p class="scenario">You finish everything on the plate and stay at the table longer than you ' +
  'had planned. The check comes a minute after you ask for it, and the total is a few dollars ' +
  'under what you had set aside. On the way out the host thanks you by name.</p>';

const EVO_INTRO =
  '<p class="leadin">Looking back on the whole thing, from the moment you decided to eat out, ' +
  'through using the app, to the end of the meal &hellip;</p>';

/* ==================== STAGE 1 QUESTIONS (Q1-Q3) ====================
   Referent = the screen / the process still under way. Present tense.        */
function stage1Questions() { return [
 {id:"EVP", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "Deciding where to eat is enjoyable in itself, apart from which restaurant I end up with.",
   "I am absorbed in figuring out where to eat.",
   "The process of deciding where to eat is worth the time I am spending on it."]},
 {id:"SRCH", type:"bipolar", stem:"Please answer for the screen you are looking at now.", rows:[
   {lab:"How likely are you to look for other restaurants before deciding?",
    lo:"Very unlikely", hi:"Very likely"},
   {lab:"How likely are you to check a few more places first?",
    lo:"Very unlikely", hi:"Very likely"}]},
 {id:"BOOK", type:"bipolar", stem:"Please answer for the screen you are looking at now.", rows:[
   {lab:"How likely are you to make a reservation based on what you see here?",
    lo:"Very unlikely", hi:"Very likely"},
   {lab:"How likely are you to go ahead and book a table right now?",
    lo:"Very unlikely", hi:"Very likely"}]}
];}

/* ==================== STAGE 2 QUESTIONS (Q4-Q10) ====================
   Referent = the settled restaurant and the finished decision.               */
function stage2Questions() { return [
 {id:"PO", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "This choice of restaurant feels like my own.",
   "This place feels like my find.",
   "The way I ended up at this restaurant feels like mine.",
   "I feel a strong sense of personal ownership over how this restaurant came about."]},
 {id:"DV", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "This restaurant was a new discovery for me.",
   "Coming across this place broadened the range of dining options I know about.",
   "Finding out about this place was interesting in itself.",
   "There was something to discover in this place."]},
 {id:"EFF", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "I put a lot of effort into deciding where to eat.",
   "I worked hard at figuring out where to go.",
   "I exerted a lot of effort in settling on a restaurant."]},
 {id:"DIFF", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "It was difficult to settle on a restaurant.",
   "I felt overwhelmed while deciding where to eat."]},
 {id:"CONF", type:"bipolar", stem:"Please answer about the restaurant you have settled on.", rows:[
   {lab:"How confident are you with the choice that you have made?",
    lo:"Not at all confident", hi:"Very confident"},
   {lab:"How confident are you that this restaurant is really the best choice for you?",
    lo:"Not at all confident", hi:"Very confident"}]},
 {id:"RLF", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "Using the app saved me a lot of effort.",
   "The app did work for me that I would otherwise have had to do myself.",
   "I felt relieved that I did not have to work through the options myself."]}
];}

/* Demographics sit here on purpose: they are the 3-4 minute filler between the
   booking decision and the dining vignette. Optional, per Questionnaire_ALL Q10. */
function demographicsQuestions() { return [
 {id:"DEM_MARITAL", type:"radio", stem:"What is your marital status?",
   options:["Single (never married)","Married","Widowed","Divorced","Separated","Others"]},
 {id:"DEM_GENDER", type:"radio", stem:"What is your gender?", options:["Male","Female"]},
 {id:"DEM_INCOME", type:"radio",
   stem:"What was your total household income before taxes during the past 12 months?",
   options:["Less than $25,000","$25,000 to $49,999","$50,000 to $74,999",
            "$75,000 to $99,999","$100,000 or more"]}
];}

/* ==================== STAGE 3 QUESTIONS (Q11-Q28) ====================
   Referent = after the meal. Manipulation checks come last so they cannot
   prime the focal measures.                                                  */
function stage3Questions() { return [
 {id:"EVO", type:"grid", stem:AGREE_STEM, labels:AGREE, intro:EVO_INTRO, items:[
   "I did something meaningful.",
   "It was significant to me.",
   "It was refreshing.",
   "I felt a sense of freedom in how this evening came about."]},
 {id:"OSAT", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "I am satisfied with the food at this restaurant.",
   "I am satisfied with the service at this restaurant.",
   "The meal at this restaurant met my expectations."]},
 {id:"DSAT", type:"bipolar", stem:"Please answer about the choice you made.", rows:[
   {lab:"How satisfied are you with the choice that you have made?",
    lo:"Not at all satisfied", hi:"Very satisfied"}]},
 {id:"WOM", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "I will recommend this restaurant to others.",
   "I will share my experience at this restaurant with others.",
   "I will write a positive review of this restaurant."]},
 {id:"RVST", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "I intend to continue dining at this restaurant.",
   "I would be willing to become a regular at this restaurant.",
   "I would like to keep coming back to this restaurant."]},
 {id:"AWR", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "I have some regrets about how this restaurant was decided on.",
   "The way this restaurant was decided on made my experience worse."]},
 {id:"EMAIL", type:"radio",
   stem:"Would you like us to email you a list of similar restaurant recommendations?",
   options:["Yes","No"]},
 {id:"FLU", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "Getting to this restaurant felt easy.",
   "It took little mental work to arrive at this restaurant.",
   "The way this restaurant came about felt smooth."]},
 {id:"ELAB", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "I thought carefully about this restaurant before booking.",
   "I turned the details of this place over in my mind.",
   "I paid close attention to what this place offers."]},
 {id:"PLAT", type:"bipolar", stem:"Next time you want a place like this &hellip;", rows:[
   {lab:"How likely are you to go back to this restaurant by name?",
    lo:"Extremely unlikely", hi:"Extremely likely"},
   {lab:"How likely are you to open the app again?",
    lo:"Extremely unlikely", hi:"Extremely likely"}]},
 {id:"MCSUB", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "The restaurant(s) I looked at were put together by the app.",
   "The app decided which restaurant(s) appeared on my screen.",
   "The restaurant(s) I saw were picked out for me rather than by me."]},
 {id:"MCSRC", type:"radio", stem:"Who chose the restaurant(s) you looked at?",
   options:["I did","The app did"]},
 {id:"MCSIZE", type:"radio", stem:"How many restaurants did you see on the screen?",
   options:["1","2–4","5 or more","Don’t remember"]},
 {id:"MCOCC", type:"bipolar", stem:"The reason you were going out to dinner tonight was:",
   rows:[{lo:"Completely ordinary", hi:"Very special"}]},
 {id:"INV", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "I was highly interested while deciding where to eat.",
   "I was highly involved in deciding where to eat."]},
 {id:"IR", type:"grid", stem:AGREE_STEM, labels:AGREE, items:[
   "The restaurant I choose here would say something about who I am.",
   "In this situation, my restaurant choice reflects my personal taste.",
   "Where I eat here is part of how I present myself."]},
 {id:"CHK", type:"bipolar", stem:"Thinking back over the whole survey:", rows:[
   {lab:"The restaurant app screen you saw looked &hellip;",
    lo:"Not at all realistic", hi:"Very realistic"},
   {lab:"You could picture yourself in that situation &hellip;",
    lo:"Not at all vividly", hi:"Very vividly"}]}
];}
