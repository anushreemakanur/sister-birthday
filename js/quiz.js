const KEY = "quiz_answers_v4";

/* FULL QUESTIONS (25) */
const QUESTIONS = [
  { id:'q1', type:'radio', title:'What color feels most like "you" right now?', options:['Lavender','Pink','Sky blue','Sunset orange','Black','Pastel mix'] },
  { id:'q2', type:'radio', title:'Which word matches your current energy?', options:['Calm','Tired','Hopeful','Confused','Healing','Sensitive'] },
  { id:'q3', type:'checkbox', title:'Who is your safest person?', options:['Mumma','Akka','A friend','Myself','No one yet'] },
  { id:'q4', type:'checkbox', title:'What makes you feel truly happy?', options:['A good meal','Being with family','Listening to music','A quiet walk','Creating something','Small surprises'] },
  { id:'q5', type:'checkbox', title:'When you feel low, what comforts you?', options:['Being alone','Talking to someone I trust','Mumma','Akka','Music','Crying silently','Sleeping','Watching something calming','Writing down feelings'] },

  { id:'q6', type:'textarea', title:'What is something you wish people understood about you?' },

  { id:'q7', type:'radio', title:'Do you trust people easily?', options:['No, not at all','Only after a long time','Only when they prove it','Yes, sometimes','Yes, easily'] },

  { id:'q8', type:'checkbox', title:'What scares you most in friendships?', options:['Losing people','Being replaced','Misunderstandings','Betrayal','Being ignored','Getting too attached'] },

  { id:'q9', type:'checkbox', title:'What do you do when overwhelmed?', options:['Run away','Cry silently','Shut everyone out','Overthink','Try to distract myself','Talk to someone I trust'] },

  { id:'q10', type:'textarea', title:'If future you hugged you, what should they say?' },

  { id:'q11', type:'textarea', title:'What do you love most about Mumma?' },
  { id:'q12', type:'checkbox', title:'When do you feel most loved?', options:['When someone checks on you','When someone listens','When someone gives time','When someone hugs you','When someone encourages you'] },
  { id:'q13', type:'checkbox', title:'Your love language?', options:['Words','Time','Touch','Gifts','Acts of service'] },
  { id:'q14', type:'text', title:'Who do you admire secretly?' },
  { id:'q15', type:'checkbox', title:'What kind of people make you feel safe?', options:['Calm','Understanding','Consistent','Protective','Patient','Quiet / soft'] },

  { id:'q16', type:'textarea', title:'One dream you are scared to say out loud?' },
  { id:'q17', type:'textarea', title:'What do you want future-you to achieve?' },
  { id:'q18', type:'checkbox', title:'What do you want to let go of?', options:['Fear','Overthinking','Comparing','Past hurt','Guilt'] },
  { id:'q19', type:'text', title:'One habit you want to improve?' },
  { id:'q20', type:'textarea', title:'Where do you imagine yourself in 3 years?' },

  { id:'q21', type:'text', title:'Your strongest part?' },
  { id:'q22', type:'text', title:'Your softest part?' },
  { id:'q23', type:'text', title:'Something you deserve but don’t allow yourself to feel?' },
  { id:'q24', type:'text', title:'What reminds you that you’re growing?' },
  { id:'q25', type:'textarea', title:'Something you want future-you to never forget?' }
];

/* state */
let answers = JSON.parse(localStorage.getItem(KEY) || "{}");

/* dom */
const quizArea = document.getElementById('quizArea');
const finishBtn = document.getElementById('finishBtn');
const resetBtn = document.getElementById('resetBtn');

const summaryView = document.getElementById('summaryView');
const summaryContent = document.getElementById('summaryContent');
const backEdit = document.getElementById('backEdit');
const exportJSON = document.getElementById('exportJSON');
const printBtn = document.getElementById('printBtn');

/* helper: save */
function saveAnswers() {
  try {
    localStorage.setItem(KEY, JSON.stringify(answers));
  } catch (e) {
    console.warn("save failed", e);
  }
}

/* build the full scrollable form */
function buildForm() {
  quizArea.innerHTML = "";

  QUESTIONS.forEach(q => {
    const card = document.createElement('section');
    card.className = 'q-card';
    card.id = `card-${q.id}`;

    const title = document.createElement('div');
    title.className = 'q-title';
    title.textContent = q.title;

    // optional instruction
    const instruction = document.createElement('div');
    instruction.className = 'q-instruction';
    instruction.textContent = q.type === 'textarea' ? 'Write freely' : '';

    card.appendChild(title);
    card.appendChild(instruction);

    const opts = document.createElement('div');
    opts.className = 'options';

    const saved = answers[q.id];

    if (q.type === 'radio') {
      q.options.concat(['Other']).forEach(opt => {
        const row = document.createElement('label');
        row.className = 'option';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = q.id;
        input.value = opt === 'Other' ? '__other__' : opt;

        // check saved value
        if (saved) {
          if (saved === input.value) input.checked = true;
          // if saved was a custom string, mark other checked
          if (input.value === '__other__' && typeof saved === 'string' && !q.options.includes(saved)) {
            input.checked = true;
          }
        }

        input.addEventListener('change', () => {
          if (input.value === '__other__') {
            // show input and focus
            otherWrap.style.display = 'block';
            otherInput.focus();
            // if user had previously typed, keep it
            answers[q.id] = otherInput.value || '';
          } else {
            otherWrap.style.display = 'none';
            answers[q.id] = input.value;
          }
          saveAnswers();
        });

        const lbl = document.createElement('div');
        lbl.className = 'option-label';
        lbl.textContent = opt === 'Other' ? 'Other' : opt;

        row.appendChild(input);
        row.appendChild(lbl);
        opts.appendChild(row);

        // create other input container inline for this question (hidden by default)
        if (opt === 'Other') {
          const otherWrap = document.createElement('div');
          otherWrap.className = 'other-input';
          otherWrap.style.display = 'none';

          const otherInput = document.createElement('input');
          otherInput.type = 'text';
          otherInput.placeholder = 'Write your answer...';

          // if saved is a custom string, fill it
          if (saved && !q.options.includes(saved)) {
            otherInput.value = saved;
            otherWrap.style.display = 'block';
          }

          otherInput.addEventListener('input', () => {
            // when user types in other box, save as string
            answers[q.id] = otherInput.value;
            saveAnswers();
          });

          otherWrap.appendChild(otherInput);
          card.appendChild(otherWrap);

          // if existing saved value is custom, ensure radio-other appears selected
          if (saved && !q.options.includes(saved)) {
            // set the radio to other (we already checked above)
          }
        }
      });

    } else if (q.type === 'checkbox') {
      q.options.concat(['Other']).forEach(opt => {
        const row = document.createElement('label');
        row.className = 'option';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = q.id;
        input.value = opt === 'Other' ? '__other__' : opt;

        if (Array.isArray(saved) && saved.includes(opt)) input.checked = true;
        // if saved contains a custom string, check Other and show input (handled later)

        input.addEventListener('change', () => {
          if (input.value === '__other__') {
            // show or hide other input depending on checked
            const sibling = card.querySelector('.other-input');
            if (input.checked) {
              sibling.style.display = 'block';
              // initialize saved other array if needed
              const arr = answers[q.id] || [];
              // keep existing custom if present
              if (!arr.some(v => v && !q.options.includes(v))) {
                // nothing
              }
            } else {
              // remove any custom string entries
              const arr = (answers[q.id] || []).filter(v => q.options.includes(v));
              answers[q.id] = arr.length ? arr : undefined;
              saveAnswers();
              const sibling = card.querySelector('.other-input');
              if (sibling) {
                const valEl = sibling.querySelector('input');
                if (valEl) valEl.value = '';
              }
            }
          } else {
            // normal checkbox toggling
            const arr = new Set(answers[q.id] || []);
            if (input.checked) arr.add(input.value);
            else arr.delete(input.value);
            answers[q.id] = Array.from(arr);
            saveAnswers();
          }
        });

        const lbl = document.createElement('div');
        lbl.className = 'option-label';
        lbl.textContent = opt === 'Other' ? 'Other' : opt;

        row.append(input);
        row.append(lbl);
        opts.appendChild(row);

        if (opt === 'Other') {
          // other input container
          const otherWrap = document.createElement('div');
          otherWrap.className = 'other-input';
          otherWrap.style.display = 'none';

          const otherInput = document.createElement('input');
          otherInput.type = 'text';
          otherInput.placeholder = 'Write your answer...';

          // if saved contains any custom strings (non options), show them
          if (Array.isArray(saved)) {
            const customs = saved.filter(v => !q.options.includes(v));
            if (customs.length) {
              otherInput.value = customs.join(', ');
              otherWrap.style.display = 'block';
              // ensure the checkbox "Other" is checked visually
              const cbox = card.querySelector('input[type=checkbox][value="__other__"]');
              if (cbox) cbox.checked = true;
            }
          }

          otherInput.addEventListener('input', () => {
            // merge current checked options + this custom text as a single comma-separated custom
            const current = Array.from(card.querySelectorAll(`input[type=checkbox][name="${q.id}"]:checked`))
                              .map(n => n.value)
                              .filter(v => v !== '__other__');

            // split custom by comma to allow multiple custom values (trim)
            const customs = otherInput.value.split(',').map(s => s.trim()).filter(Boolean);

            answers[q.id] = current.concat(customs);
            saveAnswers();
          });

          otherWrap.appendChild(otherInput);
          card.appendChild(otherWrap);
        }
      });

    } else if (q.type === 'text' || q.type === 'textarea') {
      const input = document.createElement(q.type === 'text' ? 'input' : 'textarea');
      input.className = q.type === 'text' ? 'q-text' : 'q-textarea';
      input.placeholder = 'Type your answer...';
      if (answers[q.id]) input.value = answers[q.id];

      input.addEventListener('input', () => {
        answers[q.id] = input.value;
        saveAnswers();
      });

      opts.appendChild(input);
    }

    // append options and push card into area
    card.appendChild(opts);
    quizArea.appendChild(card);
  });

  // final small spacer so footer isn't overlapped
  const spacer = document.createElement('div');
  spacer.style.height = '28px';
  quizArea.appendChild(spacer);
}

/* summary building */
function buildSummary() {
  // defensive: always hide summary initially
  summaryView.classList.add('hidden');
  summaryView.style.display = 'none';

  summaryContent.innerHTML = '';

  QUESTIONS.forEach(q => {
    const item = document.createElement('div');
    item.className = 'summary-item';

    const qE = document.createElement('div');
    qE.className = 'summary-q';
    qE.textContent = q.title;

    const aE = document.createElement('div');
    aE.className = 'summary-a';

    let val = answers[q.id];
    if (Array.isArray(val)) val = val.join(', ');
    if (!val) val = '—';

    aE.textContent = val;
    item.append(qE, aE);
    summaryContent.appendChild(item);
  });
}

/* reset answers (confirm) */
function resetAll() {
  if (!confirm('Reset all saved answers? This cannot be undone.')) return;
  localStorage.removeItem(KEY);
  answers = {};
  buildForm();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* event wiring */
finishBtn.addEventListener('click', () => {
  buildSummary();
  summaryView.style.display = 'flex';
  summaryView.classList.remove('hidden');
  // scroll summary into view for accessibility
  summaryView.scrollIntoView({ behavior: 'smooth' });
});

backEdit.addEventListener('click', () => {
  summaryView.classList.add('hidden');
  summaryView.style.display = 'none';
  // focus top of form
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

exportJSON.addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(answers, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'quiz-answers.json';
  a.click();
  URL.revokeObjectURL(url);
});

printBtn.addEventListener('click', () => {
  // print summary only — show it (if not visible) then call print
  if (summaryView.classList.contains('hidden')) {
    buildSummary();
    summaryView.style.display = 'flex';
    summaryView.classList.remove('hidden');
    // tiny delay to render
    setTimeout(() => window.print(), 220);
  } else {
    window.print();
  }
});

resetBtn.addEventListener('click', resetAll);

/* defensive hide on load and build form */
window.addEventListener('load', () => {
  // force hide summary so cached classes can't show it
  if (summaryView) {
    summaryView.classList.add('hidden');
    summaryView.style.display = 'none';
  }
  buildForm();
  // small scroll restore to top
  window.scrollTo({ top: 0 });
});