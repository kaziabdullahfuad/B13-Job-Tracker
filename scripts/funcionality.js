let interviewList=[];
let rejectedList=[];

// all the total,interview and rejected count cards
let total_count=document.getElementById('total-tracker-count');
let interview_count=document.getElementById('interview-tracker-count');
let rejected_count=document.getElementById('rejected-tracker-count');
const availableJobCount=document.getElementById('available-job-count');

// button tabs to see all the cards based on filter
let allJobsbtntab=document.getElementById('all-btn-tab');
let allInterviewbtntab=document.getElementById('interview-btn-tab');
let allRejectedbtntab=document.getElementById('rejected-btn-tab');

const job_contain=document.querySelector('#available-jobs');
const filterSection=document.getElementById('filtered-section');


function total_card(){
        
    total_count.innerText=document.getElementById('job-container').children.length;
    interview_count.innerText=interviewList.length;
    rejected_count.innerText=rejectedList.length;
    availableJobCount.innerText=document.getElementById('job-container').children.length;
}

total_card();

function toggleStyle(id){
    // console.log("clicked",id);/ will contaiin the id of the one we clicked
    
    // first i will remove all the bg
    allJobsbtntab.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');
    allInterviewbtntab.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');
    allRejectedbtntab.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');

    allJobsbtntab.classList.add('text-[#64748B]', 'bg-[#FFFFFF]','shadow-md','border-[#F1F2F4]', 'border-1');
    allInterviewbtntab.classList.add('text-[#64748B]', 'bg-[#FFFFFF]','border-[#F1F2F4]', 'border-1','shadow-md');
    allRejectedbtntab.classList.add('text-[#64748B]', 'bg-[#FFFFFF]','border-[#F1F2F4]', 'border-1','shadow-md');

    const selected=document.getElementById(id);
    console.log(selected);

    selected.classList.remove('text-[#64748B]', 'bg-[#FFFFFF]','shadow-md','border-[#F1F2F4]', 'border-1');
    selected.classList.add('bg-[#3B82F6]', 'text-[#FFFFFF]');

    if(id=='interview-btn-tab'){
        document.getElementById('job-container').classList.add('hidden');
        document.getElementById('filtered-section').classList.remove('hidden');
        renderInterview();
    }
    else if(id=='all-btn-tab'){
         document.getElementById('job-container').classList.remove('hidden');
        document.getElementById('filtered-section').classList.add('hidden');
        renderInterview();
    }
    
}

job_contain.addEventListener('click',function(event){
    
    // console.log(event.target);
    // console.log(event.target.parentNode.parentNode);
    
    if(event.target.classList.contains('interview-btn')){
         const parentNode=event.target.parentNode.parentNode;
        const companyName=parentNode.querySelector('.company-name').innerText;
        const jobPosition=parentNode.querySelector('.job-position').innerText;
        const jobSalary=parentNode.querySelector('.job-salary').innerText;
        const jobBadge=parentNode.querySelector('.job-badge').innerText;
        const jobDescription=parentNode.querySelector('.job-description').innerText;

        console.log(companyName,jobPosition,jobSalary,jobBadge,jobDescription);

        // now ekta object banabo
        const jobInfo={
            companyName,
            jobPosition,
            jobSalary,
            jobBadge,
            jobDescription
        }
        
        // console.log(jobInfo);

        const jobExists=interviewList.find(item=> item.companyName==jobInfo.companyName)

        if(!jobExists){
            parentNode.querySelector('.job-badge').classList.remove('badge-soft','badge-primary');
            parentNode.querySelector('.job-badge').classList.add('badge-success');
            parentNode.querySelector('.job-badge').innerText='INTERVIEW'
            interviewList.push(jobInfo);
        }

        // renderInterview();
        // console.log(interviewList.length);        
        // console.log(interviewList);
        
    } 
    
    
    
    
})

function renderInterview(){

    filterSection.innerHTML='';

    for(let interview of interviewList){
        
        console.log(interview);
        
        let div=document.createElement('div');
        div.className='jobs-information-container grid grid-cols-1 gap-4';
        div.innerHTML=`
            <div class="jobs-info-card p-6 bg-[#FFFFFF] shadow-md border-[#F1F2F4] rounded-md border-2">
                <div class="flexing-card-button flex justify-between items-center">
                    <div>
                        <h2 class="company-name text-[#002C5C] font-semibold mb-1 text-xl">Mobile First Corp</h2>
                        <p class="job-position text-[#64748B]">React Native Developer</p>

                    </div>
                    <div class="w-8 rounded-full bg-[#FFFFFF]">

                        <button class="cursor-pointer "><img src="./images/Trash.png" alt=""></button>
                    </div>
                </div>
                <p class="job-salary my-5 text-[#64748B] text-sm">Remote • Full-time •$130,000 - $175,000</p>
                <div class="job-badge badge badge-success text-[#002C5C] p-4">INTERVIEW</div>
                <p class="job-description text-[#323B49] text-sm mt-2 mb-5">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

                <!-- duita button banao -->
                 <div class="flex gap-2">
                    <button class="interview-btn text-[#10B981] py-2 px-3 font-semibold border-1 cursor-pointer hover:bg-green-300">INTERVIEW</button>
                    <button class="rejected-btn text-[#EF4444] py-2 px-3 font-semibold border-1 cursor-pointer hover:bg-red-300">REJECTED</button>
                 </div>

        </div>
        `
        filterSection.appendChild(div);
        
    }
}