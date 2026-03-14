let interviewList=[];
let rejectedList=[];
let currentStatus='all';

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
    // console.log(selected);
    currentStatus=id; // now current status id te to find kon tab a achi

    selected.classList.remove('text-[#64748B]', 'bg-[#FFFFFF]','shadow-md','border-[#F1F2F4]', 'border-1');
    selected.classList.add('bg-[#3B82F6]', 'text-[#FFFFFF]');

    if(id=='interview-btn-tab'){
        document.getElementById('job-container').classList.add('hidden');
        console.log("Interview  list len",interviewList);
        if(interviewList.length==0){
            document.getElementById('available-job-count').innerText=interviewList.length;
            document.getElementById('no-jobs-available').classList.remove('hidden');
             document.getElementById('filtered-section').classList.add('hidden');
        }
        else{
            console.log("Array size",interviewList.length);
            document.getElementById('available-job-count').innerText=interviewList.length;
            document.getElementById('filtered-section').classList.remove('hidden');
            document.getElementById('no-jobs-available').classList.add('hidden');
            renderInterview();
        }
    }
    else if(id=='all-btn-tab'){
        document.getElementById('available-job-count').innerText=document.getElementById('job-container').children.length;
        if(document.getElementById('job-container').children.length==0){
            console.log("Amar kichui nai");
            
            document.getElementById('filtered-section').classList.add('hidden');
            document.getElementById('job-container').classList.add('hidden');
            document.getElementById('no-jobs-available').classList.remove('hidden');
        }
        else{
            document.getElementById('no-jobs-available').classList.add('hidden');
            document.getElementById('job-container').classList.remove('hidden');
            document.getElementById('filtered-section').classList.add('hidden');
        }
        
        
        
    }
    else if(id=='rejected-btn-tab'){
        document.getElementById('job-container').classList.add('hidden');
        if(rejectedList.length==0){
           
            document.getElementById('available-job-count').innerText=rejectedList.length;
            document.getElementById('no-jobs-available').classList.remove('hidden');
            document.getElementById('filtered-section').classList.add('hidden');
        }
        else{
            console.log("Array size in rejected btn tab",rejectedList.length);
            document.getElementById('available-job-count').innerText=rejectedList.length;
            document.getElementById('filtered-section').classList.remove('hidden');
            document.getElementById('no-jobs-available').classList.add('hidden');
            renderRejected();
           
        }
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
        
        const foundInRejected=rejectedList.find(item=>item.companyName==companyName);
        if(foundInRejected){
            // will have to change the style of the badge
            parentNode.querySelector('.job-badge').classList.remove('badge-error');
            rejectedList=rejectedList.filter(value=>value.companyName!=companyName);
            console.log("Niche rejected List");
            
            console.log(rejectedList);
            
            // kon tab a achi r
           
        }

         if(currentStatus=='rejected-btn-tab'){
            // interview tab a ache
            
            let holder=document.getElementById('job-container');

            for(hold of holder.children){
                // console.log(hold);
                let nameCompany=hold.querySelector('.company-name').innerText;
                if(nameCompany==companyName){
                    console.log(nameCompany);
                    let badge=hold.querySelector('.job-badge');
                    badge.innerText="INTERVIEW"
                    badge.classList.add('badge-success');
                    badge.classList.remove('badge-error');
                }
            }

            if(rejectedList.length==0){
                // console.log("Interview  list len",interviewList);
                
                 document.getElementById('no-jobs-available').classList.remove('hidden');
                  document.getElementById('filtered-section').classList.add('hidden');
                // renderInterview();
            }
            else{
                document.getElementById('no-jobs-available').classList.add('hidden');
                renderRejected();
            }

            
        }
        
        total_card();
        document.getElementById('available-job-count').innerText=rejectedList.length;
        
    }
    else if(event.target.classList.contains('rejected-btn')){
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

        const jobExists=rejectedList.find(item=> item.companyName==jobInfo.companyName)

        if(!jobExists){
            parentNode.querySelector('.job-badge').classList.remove('badge-soft','badge-primary');
            parentNode.querySelector('.job-badge').classList.add('badge-error');
            parentNode.querySelector('.job-badge').innerText='REJECTED'
            rejectedList.push(jobInfo);
        }

        const foundInRejected=interviewList.find(item=>item.companyName==companyName);
        if(foundInRejected){
            // will have to change the style of the badge
            parentNode.querySelector('.job-badge').classList.remove('badge-success');
            interviewList=interviewList.filter(value=>value.companyName!=companyName);
        }

        if(currentStatus=='interview-btn-tab'){
            // interview tab a ache
            console.log("Interview  list len",interviewList);
            if(interviewList.length==0){
                // console.log("Interview  list len",interviewList);
                
                 document.getElementById('no-jobs-available').classList.remove('hidden');
                  document.getElementById('filtered-section').classList.add('hidden');
                // renderInterview();
            }
            else{
                document.getElementById('no-jobs-available').classList.add('hidden');
                renderInterview();
            }

            let holder=document.getElementById('job-container');

            for(hold of holder.children){
                // console.log(hold);
                let nameCompany=hold.querySelector('.company-name').innerText;
                if(nameCompany==companyName){
                    console.log(nameCompany);
                    let badge=hold.querySelector('.job-badge');
                    badge.innerText="REJECTED"
                    badge.classList.add('badge-error');
                    badge.classList.remove('badge-success');
                }
            }
        }
        

        total_card();
        document.getElementById('available-job-count').innerText=interviewList.length;
    } 
    
    
    
    
})



function renderInterview(){
    
    filterSection.innerHTML='';
    let div=document.createElement('div');
    div.className='jobs-information-container grid grid-cols-1 gap-4';
    for(let interview of interviewList){
        
        console.log(interview);
        
        // let div=document.createElement('div');
        // div.className='jobs-information-container grid grid-cols-1 gap-4';
        div.innerHTML+=`
            <div class="jobs-info-card p-6 bg-[#FFFFFF] shadow-md border-[#F1F2F4] rounded-md border-2">
                <div class="flexing-card-button flex justify-between items-center">
                    <div>
                        <h2 class="company-name text-[#002C5C] font-semibold mb-1 text-xl">${interview.companyName}</h2>
                        <p class="job-position text-[#64748B]">${interview.jobPosition}</p>

                    </div>
                    <div class="w-8 rounded-full bg-[#FFFFFF]">

                        <button class="cursor-pointer "><img src="./images/Trash.png" alt=""></button>
                    </div>
                </div>
                <p class="job-salary my-5 text-[#64748B] text-sm">${interview.jobSalary}</p>
                <div class="job-badge badge badge-success text-[#002C5C] p-4">INTERVIEW</div>
                <p class="job-description text-[#323B49] text-sm mt-2 mb-5">${interview.jobDescription}</p>

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

// for rejected rendering
function renderRejected(){
    
    filterSection.innerHTML='';
    let div=document.createElement('div');
    div.className='jobs-information-container grid grid-cols-1 gap-4';
    for(let rejected of rejectedList){
        
        console.log(rejected);
        
        // let div=document.createElement('div');
        // div.className='jobs-information-container grid grid-cols-1 gap-4';
        div.innerHTML+=`
            <div class="jobs-info-card p-6 bg-[#FFFFFF] shadow-md border-[#F1F2F4] rounded-md border-2">
                <div class="flexing-card-button flex justify-between items-center">
                    <div>
                        <h2 class="company-name text-[#002C5C] font-semibold mb-1 text-xl">${rejected.companyName}</h2>
                        <p class="job-position text-[#64748B]">${rejected.jobPosition}</p>

                    </div>
                    <div class="w-8 rounded-full bg-[#FFFFFF]">

                        <button class="cursor-pointer "><img src="./images/Trash.png" alt=""></button>
                    </div>
                </div>
                <p class="job-salary my-5 text-[#64748B] text-sm">${rejected.jobSalary}</p>
                <div class="job-badge badge badge-error text-[#002C5C] p-4">REJECTED</div>
                <p class="job-description text-[#323B49] text-sm mt-2 mb-5">${rejected.jobDescription}</p>

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