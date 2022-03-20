/// start functionality
const tasksDOM = document.querySelector('.tasks')
const formDOM = document.querySelector('.task-form')
const taskInputDOM1 = document.querySelector('.task-input-1')
const taskInputDOM2 = document.querySelector('.task-input-2')
const taskInputDOM3 = document.querySelector('.task-input-3')
// Load tasks from /api/tasks
const showTasks = async () => {
  
  try {
    const {
      data: { ads },
    } = await axios.get('/api/v1/ads')
    console.log(ads);
    if (ads.length < 1) {
      tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
      return
    }
    const allTasks = ads
      .map((ad) => {
          console.log(ad);
        const { campain, website, logo } = ad
        return `
        <div style="padding: 20px; background: #333; color: white; margin: 20px; display: flex; flex-direction: column">
            <div style="width: 300px; height: 100px; display: flex; flex-direction: column">
                <h4>${campain}</h4>
                <a href="${website}" target="_blank"><img style="width: 100px; height: 70px" src="${logo}"></a>
            </div>
            <textarea readonly="readonly" style="focus: none; margin-top: 30px; width: 600px; height: 100px; border: none; resize: none">&lt;a href="${website}" target="_blank"&gt;&lt;img src="${logo}" alt="${campain}"&gt;&lt;/a&gt;</textarea>
            </div>
        `
      })
      .join('')
    tasksDOM.innerHTML = allTasks
  } catch (error) {
    tasksDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>'
  }
  
}

showTasks()

// form

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name1 = taskInputDOM1.value
  const name2 = taskInputDOM2.value
  const name3 = taskInputDOM3.value

  try {
    await axios.post('/api/v1/ads', { 
        "campain": name1, 
        "website": name2, 
        "logo": name3 
    })
    showTasks()
    // taskInputDOM.value = ''
    // formAlertDOM.style.display = 'block'
    // formAlertDOM.textContent = `success, task added`
    // formAlertDOM.classList.add('text-success')
    console.log("successfully added");
  } catch (error) {
    // formAlertDOM.style.display = 'block'
    // formAlertDOM.innerHTML = `error, please try again`
  }
//   setTimeout(() => {
//     formAlertDOM.style.display = 'none'
//     formAlertDOM.classList.remove('text-success')
//   }, 3000)
})

//// end functionality