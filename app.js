const questions = [
  {
    id: "carb",
    type: "genetic",
    section: "Step 1: 体質タイプ傾向",
    title: "糖質太りタイプ",
    choices: [
      "パン・麺・丼・甘い物がやめられない",
      "食後に眠くなる・だるくなる",
      "お腹まわりから太りやすい",
      "空腹時にイライラ・集中力低下しやすい",
      "夜遅い時間にお腹が空きやすい",
    ],
  },
  {
    id: "lipid",
    type: "genetic",
    section: "Step 1: 体質タイプ傾向",
    title: "脂質太りタイプ",
    choices: [
      "揚げ物やこってり系で胃もたれしやすい",
      "油ものを食べるとお腹を下しやすい",
      "背中・二の腕・腰まわりに脂肪がつきやすい",
      "お腹が張りやすくガスが溜まりやすい",
      "便器にベタっと便がつくことがある",
    ],
  },
  {
    id: "metabolism_low",
    type: "genetic",
    section: "Step 1: 体質タイプ傾向",
    title: "代謝太りタイプ",
    choices: [
      "運動習慣がほとんどない",
      "少し動くだけで疲れやすい",
      "手足が冷えやすく汗をかきにくい",
      "食事量が少ないのに体型が変わらない",
      "下半身が特にたるみやすい",
    ],
  },
  {
    id: "digestion",
    type: "foundation",
    section: "Step 2: 体質・土台チェック",
    title: "消化力",
    choices: [
      "便秘・下痢・軟便を繰り返す",
      "お腹が張りやすい",
      "発酵食品で調子が悪くなる",
      "油ものが重たい",
      "ガスが溜まりやすい",
    ],
  },
  {
    id: "glucose",
    type: "foundation",
    section: "Step 2: 体質・土台チェック",
    title: "血糖値",
    choices: [
      "食後に眠くなる",
      "甘い物・間食がやめられない",
      "夕食が遅くなりがち",
      "朝食を抜くことがある",
      "ストレスが多い",
    ],
  },
  {
    id: "fatigue",
    type: "foundation",
    section: "Step 2: 体質・土台チェック",
    title: "慢性疲労",
    choices: [
      "朝起きるのがつらい",
      "寝ても疲れが取れない",
      "だるさが続いている",
      "寝つきが悪い・夜中に目が覚める",
      "カフェインをよく飲む",
    ],
  },
  {
    id: "iron",
    type: "foundation",
    section: "Step 2: 体質・土台チェック",
    title: "鉄不足傾向",
    choices: [
      "疲れやすい・めまいがある",
      "甘い物が無性に欲しくなる",
      "爪が割れやすい",
      "赤身肉をあまり食べない",
      "月経量が多い／授乳中",
    ],
  },
  {
    id: "metabolism_body",
    type: "foundation",
    section: "Step 2: 体質・土台チェック",
    title: "代謝低下",
    choices: [
      "冷えやすい",
      "むくみやすい",
      "便秘がち",
      "汗をかきにくい",
      "太りやすくなったと感じる",
    ],
  },
  {
    id: "protein",
    type: "foundation",
    section: "Step 2: 体質・土台チェック",
    title: "タンパク質不足",
    choices: [
      "毎食、肉・魚・卵・大豆を意識していない",
      "食事がパン・おにぎり・麺だけで終わることが多い",
      "髪や肌のハリがなくなってきたと感じる",
      "筋肉が落ちてきた・体がたるみやすい",
      "傷や口内炎が治りにくい",
    ],
  },
];

const RESULT_CONFIG = {
  weights: {
    digestion: 1.5,
    glucose: 1.3,
    fatigue: 1.2,
    iron: 1.4,
    metabolism_body: 1.1,
    protein: 1.3,
  },
  cautionThreshold: 2,
  warningThreshold: 3,
  totalScoreThresholds: {
    excellent: 5,
    good: 10,
    moderate: 15,
  },
};

const TYPE_CONFIG = [
  {
    id: "digestion",
    title: "【ためこみ太り】消化力低下タイプ",
    shortTitle: "消化力低下",
    image: "image/消化力低下.png",
    description:
      "あなたは「ためこみ太り」タイプです。腸の消化力が落ちていて、老廃物や余分なものを体にためやすい状態。まず「出す」ことを整えるのが、痩せへの近道です。",
  },
  {
    id: "glucose",
    title: "【食べ方太り】食後高血糖タイプ",
    shortTitle: "食後高血糖",
    image: "image/食後高血糖.png",
    description:
      "あなたは「食べ方太り」タイプです。食後に血糖値が急上昇しやすく、脂肪がつきやすい体のしくみになっています。食べる内容より「食べ方」を変えるだけで変わります。",
  },
  {
    id: "fatigue",
    title: "【疲れ太り】慢性疲労タイプ",
    shortTitle: "慢性疲労",
    image: "image/慢性疲労.png",
    description:
      "あなたは「疲れ太り」タイプです。慢性的な疲労で体のエネルギー代謝が乱れ、太りやすくなっています。頑張っているのに痩せない…それ、疲れのせいかもしれません。",
  },
  {
    id: "iron",
    title: "【貧血太り】鉄欠乏貧血タイプ",
    shortTitle: "鉄欠乏",
    image: "image/鉄欠乏.png",
    description:
      "あなたは「貧血太り」タイプです。鉄が不足すると全身に酸素が届きにくくなり、代謝がぐっと落ちます。自覚がなくても「かくれ貧血」が原因のことがよくあります。",
  },
  {
    id: "metabolism_body",
    title: "【冷え太り】基礎代謝低下タイプ",
    shortTitle: "基礎代謝低下",
    image: "image/基礎代謝低下.png",
    description:
      "あなたは「冷え太り」タイプです。基礎代謝が低下して体が冷えやすく、脂肪を燃やしにくい体になっています。食べる量を減らしても痩せにくいのは、これが原因かも。",
  },
];

const NEUTRAL_MAIN_TYPE = "はっきりした偏りは見られません";

const geneQuestions = questions.filter((item) => item.type === "genetic");
const foundationQuestions = questions.filter((item) => item.type === "foundation");
const typeLabels = TYPE_CONFIG.map((item) => item.title);
const bodyLabels = foundationQuestions.map((item) => item.title);

const appState = {
  form: {
    name: "",
    lineName: "",
    gender: "",
    age: "",
  },
  formError: "",
  stepIndex: 0,
  answers: questions.map(() => new Set()),
  adviceRequested: false,
  loadingTimer: null,
  report: null,
};

const introEl = document.getElementById("screen-intro");
const questionEl = document.getElementById("screen-question");
const loadingEl = document.getElementById("screen-loading");
const resultEl = document.getElementById("screen-result");
const toastEl = document.getElementById("toast");

function setScreen(target) {
  const screens = {
    intro: introEl,
    question: questionEl,
    loading: loadingEl,
    result: resultEl,
  };

  Object.entries(screens).forEach(([name, element]) => {
    element.classList.toggle("hidden", name !== target);
  });
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderIntro() {
  introEl.innerHTML = `
    <h1 class="intro-title">初回ダイエット診断</h1>
    <p class="intro-lead">あなたの体質遺伝子と現在の土台を分析し、<br />理想のあなたをプロデュースします✨</p>

    <div class="form-block">
      <div>
        <label class="field-label" for="name-input">お名前</label>
        <input id="name-input" type="text" placeholder="山田 花子" value="${escapeHtml(appState.form.name)}" />
      </div>

      <div>
        <label class="field-label" for="line-name-input">LINEのお名前</label>
        <input id="line-name-input" type="text" placeholder="LINE表示名（任意）" value="${escapeHtml(appState.form.lineName)}" />
      </div>

      <div>
        <div class="field-label">性別</div>
        <div class="gender-row">
          ${renderGenderButton("男性")}
          ${renderGenderButton("女性")}
          ${renderGenderButton("その他")}
        </div>
      </div>

      <div>
        <label class="field-label" for="age-input">年齢</label>
        <input id="age-input" type="number" min="1" max="120" placeholder="30" value="${escapeHtml(String(appState.form.age))}" />
      </div>

      ${appState.formError ? `<p class="validation-error">${escapeHtml(appState.formError)}</p>` : ""}

      <button type="button" class="primary-btn" id="start-btn">診断をスタートする</button>
    </div>
  `;

  introEl.querySelector("#name-input").addEventListener("input", (event) => {
    appState.form.name = event.target.value;
  });

  introEl.querySelector("#line-name-input").addEventListener("input", (event) => {
    appState.form.lineName = event.target.value;
  });

  introEl.querySelector("#age-input").addEventListener("input", (event) => {
    appState.form.age = event.target.value;
  });

  introEl.querySelectorAll(".gender-btn").forEach((button) => {
    button.addEventListener("click", () => {
      appState.form.gender = button.dataset.gender;
      renderIntro();
    });
  });

  introEl.querySelector("#start-btn").addEventListener("click", () => {
    if (!validateIntroForm()) {
      renderIntro();
      return;
    }

    appState.stepIndex = 0;
    appState.formError = "";
    renderQuestion();
    setScreen("question");
  });
}

function renderGenderButton(gender) {
  const active = appState.form.gender === gender ? "active" : "";
  return `<button type="button" class="gender-btn ${active}" data-gender="${gender}">${gender}</button>`;
}

function validateIntroForm() {
  const name = appState.form.name.trim();
  const age = Number(appState.form.age);

  if (!name) {
    appState.formError = "お名前を入力してください";
    return false;
  }

  if (!Number.isInteger(age) || age < 1 || age > 120) {
    appState.formError = "有効な年齢を入力してください";
    return false;
  }

  if (!appState.form.gender) {
    appState.formError = "性別を選択してください";
    return false;
  }

  appState.formError = "";
  return true;
}

function renderQuestion() {
  const index = appState.stepIndex;
  const item = questions[index];
  const progress = Math.round(((index + 1) / questions.length) * 100);
  const selected = appState.answers[index];
  const nextLabel = index === questions.length - 1 ? "分析結果を表示" : "次へ進む";

  questionEl.innerHTML = `
    <div class="step-head">
      <div class="step-meta">
        <div>
          <div class="step-label">${item.section}</div>
          <h3 class="item-label">項目 ${index + 1} / ${questions.length}</h3>
        </div>
        <div class="progress-text">${progress}%</div>
      </div>
      <div class="progress-track"><div class="progress-value" style="width: ${progress}%"></div></div>
    </div>

    <div class="question-box">
      <div class="badge-row">複数選択可</div>
      <h2 class="question-title">${item.title}</h2>
      <p class="question-copy">当てはまるものすべてにチェックをしてくださいね✨</p>
      <div class="choice-list">
        ${item.choices
          .map((choice, choiceIndex) => {
            const active = selected.has(choiceIndex) ? "active" : "";
            return `<button type="button" class="choice-btn ${active}" data-choice-index="${choiceIndex}">${choice}</button>`;
          })
          .join("")}
      </div>
    </div>

    <div class="question-nav">
      <button type="button" class="nav-btn" id="back-btn" ${index === 0 ? "disabled" : ""}>戻る</button>
      <button type="button" class="nav-btn action-btn" id="next-btn">${nextLabel}</button>
    </div>
  `;

  questionEl.querySelectorAll(".choice-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const choiceIndex = Number(button.dataset.choiceIndex);
      if (selected.has(choiceIndex)) {
        selected.delete(choiceIndex);
      } else {
        selected.add(choiceIndex);
      }
      renderQuestion();
    });
  });

  questionEl.querySelector("#back-btn").addEventListener("click", () => {
    if (appState.stepIndex === 0) {
      return;
    }
    appState.stepIndex -= 1;
    renderQuestion();
  });

  questionEl.querySelector("#next-btn").addEventListener("click", () => {
    if (appState.stepIndex === questions.length - 1) {
      startAnalysis();
      return;
    }

    appState.stepIndex += 1;
    renderQuestion();
  });
}

function startAnalysis() {
  setScreen("loading");

  loadingEl.innerHTML = `
    <div class="loading-box">
      <div class="spinner" aria-hidden="true"></div>
      <h2 class="loading-title">分析レポートを作成中...</h2>
      <p class="loading-copy">${escapeHtml(appState.form.name)}様の「理想の身体」への<br />最短ルートを計算しています✨</p>
    </div>
  `;

  if (appState.loadingTimer) {
    clearTimeout(appState.loadingTimer);
  }

  appState.loadingTimer = setTimeout(() => {
    appState.report = buildReport();
    renderResult();
    setScreen("result");
  }, 1300);
}

function evaluateFoundationStatus(foundationResults, totalWeightedScore) {
  const criticalAreas = foundationResults.filter((item) => item.score >= RESULT_CONFIG.warningThreshold);
  const cautionAreas = foundationResults.filter(
    (item) =>
      item.score >= RESULT_CONFIG.cautionThreshold && item.score < RESULT_CONFIG.warningThreshold
  );
  const healthyAreas = foundationResults.filter((item) => item.score < RESULT_CONFIG.cautionThreshold);

  const hasDigestionCaution =
    foundationResults.find((item) => item.id === "digestion")?.score >= RESULT_CONFIG.cautionThreshold;
  const hasIronCaution =
    foundationResults.find((item) => item.id === "iron")?.score >= RESULT_CONFIG.cautionThreshold;
  const hasProteinCaution =
    foundationResults.find((item) => item.id === "protein")?.score >= RESULT_CONFIG.cautionThreshold;
  const hasGlucoseCaution =
    foundationResults.find((item) => item.id === "glucose")?.score >= RESULT_CONFIG.cautionThreshold;
  const hasFatigueCaution =
    foundationResults.find((item) => item.id === "fatigue")?.score >= RESULT_CONFIG.cautionThreshold;
  const hasMetabolismBodyCaution =
    foundationResults.find((item) => item.id === "metabolism_body")?.score >= RESULT_CONFIG.cautionThreshold;

  const correlationPatterns = [];
  if (hasDigestionCaution && hasIronCaution) {
    correlationPatterns.push("消化力低下による鉄吸収障害の可能性");
  }
  if (hasProteinCaution && hasFatigueCaution) {
    correlationPatterns.push("タンパク質不足による疲労蓄積の可能性");
  }
  if (hasGlucoseCaution && hasFatigueCaution) {
    correlationPatterns.push("血糖値の乱高下による副腎疲労の可能性");
  }
  if (hasMetabolismBodyCaution && hasIronCaution) {
    correlationPatterns.push("甲状腺機能低下と鉄不足の相互作用の可能性");
  }
  if (hasDigestionCaution && hasProteinCaution) {
    correlationPatterns.push("消化力低下によるタンパク質吸収不良の可能性");
  }

  if (
    totalWeightedScore < RESULT_CONFIG.totalScoreThresholds.excellent &&
    criticalAreas.length === 0
  ) {
    return {
      overallStatus: "excellent",
      statusMessage: "体質の土台は非常に安定しています。現在の生活習慣を維持しましょう。",
      statusClass: "ok",
      statusIcon: "✨",
      criticalAreas,
      cautionAreas,
      healthyAreas,
      correlationPatterns,
    };
  }

  if (
    totalWeightedScore < RESULT_CONFIG.totalScoreThresholds.good &&
    criticalAreas.length <= 1
  ) {
    return {
      overallStatus: "good",
      statusMessage: "概ね良好ですが、一部改善の余地があります。",
      statusClass: "good",
      statusIcon: "👍",
      criticalAreas,
      cautionAreas,
      healthyAreas,
      correlationPatterns,
    };
  }

  if (totalWeightedScore < RESULT_CONFIG.totalScoreThresholds.moderate) {
    return {
      overallStatus: "moderate",
      statusMessage: "栄養バランスの改善が推奨されます。カウンセラーにご相談ください。",
      statusClass: "warn",
      statusIcon: "⚠️",
      criticalAreas,
      cautionAreas,
      healthyAreas,
      correlationPatterns,
    };
  }

  return {
    overallStatus: "needsAttention",
    statusMessage: "複数の領域で改善が必要です。専門家のサポートを強くお勧めします。",
    statusClass: "danger",
    statusIcon: "🚨",
    criticalAreas,
    cautionAreas,
    healthyAreas,
    correlationPatterns,
  };
}

function buildReport() {
  const answerCounts = Object.fromEntries(
    questions.map((item, idx) => [item.id, appState.answers[idx].size])
  );
  const totalSelectedCount = Object.values(answerCounts).reduce((sum, count) => sum + count, 0);
  const foundationResults = foundationQuestions.map((item, idx) => {
    const answerIndex = idx + geneQuestions.length;
    const score = appState.answers[answerIndex].size;
    const weight = RESULT_CONFIG.weights[item.id] ?? 1;
    return {
      id: item.id,
      title: item.title,
      score,
      max: item.choices.length,
      weightedScore: score * weight,
    };
  });
  const bodyScores = foundationResults.map((item) => item.score);
  const totalWeightedScore = foundationResults.reduce((sum, item) => sum + item.weightedScore, 0);
  const foundationResultMap = Object.fromEntries(foundationResults.map((item) => [item.id, item]));

  const typeResults = TYPE_CONFIG.map((item) => {
    const matchedResult = foundationResultMap[item.id];
    return {
      id: item.id,
      title: item.title,
      rawScore: matchedResult ? matchedResult.score : 0,
      score: matchedResult ? matchedResult.score : 0,
    };
  });

  let mainTypeIndex = 0;
  typeResults.forEach((item, idx) => {
    if (item.rawScore > typeResults[mainTypeIndex].rawScore) {
      mainTypeIndex = idx;
    }
  });

  const status = evaluateFoundationStatus(foundationResults, totalWeightedScore);
  const hasClearTypeSignal = totalSelectedCount > 0 && typeResults[mainTypeIndex].rawScore > 0;
  const mainTypeConfig = hasClearTypeSignal ? TYPE_CONFIG[mainTypeIndex] : null;

  return {
    userLine: `${appState.form.name.trim()} 様 (${appState.form.age}歳 / ${appState.form.gender})`,
    typeResults,
    bodyScores,
    mainType: mainTypeConfig ? mainTypeConfig.title : NEUTRAL_MAIN_TYPE,
    mainTypeImage: mainTypeConfig ? mainTypeConfig.image : "",
    mainTypeDescription: mainTypeConfig ? mainTypeConfig.description : "",
    statusMessage: status.statusMessage,
    statusClass: status.statusClass,
    statusIcon: status.statusIcon,
    criticalAreas: status.criticalAreas,
    cautionAreas: status.cautionAreas,
    correlationPatterns: status.correlationPatterns,
  };
}

function buildRadarSvg(labels, scores, maxScore) {
  const size = 330;
  const center = size / 2;
  const radius = 112;
  const levelCount = 5;

  const axisPoints = labels.map((_, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / labels.length;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;
    return { angle, x, y };
  });

  const levelPolygons = Array.from({ length: levelCount }, (_, levelIndex) => {
    const currentRadius = (radius * (levelIndex + 1)) / levelCount;
    return axisPoints
      .map(({ angle }) => {
        const x = center + Math.cos(angle) * currentRadius;
        const y = center + Math.sin(angle) * currentRadius;
        return `${x.toFixed(2)},${y.toFixed(2)}`;
      })
      .join(" ");
  });

  const valuePolygon = axisPoints
    .map(({ angle }, index) => {
      const ratio = scores[index] / maxScore;
      const x = center + Math.cos(angle) * radius * ratio;
      const y = center + Math.sin(angle) * radius * ratio;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  const axes = axisPoints
    .map(
      ({ x, y }) =>
        `<line x1="${center}" y1="${center}" x2="${x.toFixed(2)}" y2="${y.toFixed(2)}" stroke="#d8e4f2" stroke-width="1" />`
    )
    .join("");

  const labelsMarkup = axisPoints
    .map(({ angle }, index) => {
      const labelRadius = radius + 26;
      const x = center + Math.cos(angle) * labelRadius;
      const y = center + Math.sin(angle) * labelRadius;
      let anchor = "middle";
      if (Math.cos(angle) > 0.4) {
        anchor = "start";
      } else if (Math.cos(angle) < -0.4) {
        anchor = "end";
      }

      return `<text x="${x.toFixed(2)}" y="${y.toFixed(2)}" text-anchor="${anchor}" dominant-baseline="middle" font-size="12" fill="#66778f">${labels[index]}</text>`;
    })
    .join("");

  return `
    <svg class="radar-chart" viewBox="0 0 ${size} ${size}" role="img" aria-label="現在の体質バランス">
      ${levelPolygons
        .map(
          (polygon, idx) =>
            `<polygon points="${polygon}" fill="none" stroke="#d8e4f2" stroke-width="${idx === levelCount - 1 ? 1.5 : 1}" />`
        )
        .join("")}
      ${axes}
      <polygon points="${valuePolygon}" fill="rgba(52,124,248,0.22)" stroke="#347cf8" stroke-width="2" />
      ${axisPoints
        .map(({ angle }, index) => {
          const ratio = scores[index] / maxScore;
          const x = center + Math.cos(angle) * radius * ratio;
          const y = center + Math.sin(angle) * radius * ratio;
          return `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="4" fill="#347cf8" />`;
        })
        .join("")}
      ${labelsMarkup}
    </svg>
  `;
}

function renderResult() {
  const report = appState.report;
  const mainTypeImageMarkup = report.mainTypeImage
    ? `<img class="main-type-image" src="${report.mainTypeImage}" alt="${report.mainType}" />`
    : "";
  const mainTypeDescriptionMarkup = report.mainTypeDescription
    ? `<p class="main-type-description">${report.mainTypeDescription}</p>`
    : "";

  const typeScoresMarkup = typeLabels
    .map(
      (label, index) => `
      <div class="score-item">
        <span>${label}</span>
        <strong>${report.typeResults[index].score} / 5</strong>
      </div>
    `
    )
    .join("");

  const criticalItemsMarkup = report.criticalAreas
    .map((item) => `<div>${item.title} (${item.score}/5)</div>`)
    .join("");

  const cautionItemsMarkup = report.cautionAreas
    .map((item) => `<div>${item.title} (${item.score}/5)</div>`)
    .join("");

  const patternsMarkup = report.correlationPatterns
    .map((text) => `<li>${text}</li>`)
    .join("");

  const criticalBlock =
    report.criticalAreas.length > 0
      ? `
        <div class="analysis-box analysis-box-critical">
          <div class="analysis-title">🚨 重点ケア項目（要改善）</div>
          <div class="analysis-grid">${criticalItemsMarkup}</div>
        </div>
      `
      : "";

  const cautionBlock =
    report.cautionAreas.length > 0
      ? `
        <div class="analysis-box">
          <div class="analysis-title">⚠️ 注意項目</div>
          <div class="analysis-grid">${cautionItemsMarkup}</div>
        </div>
      `
      : "";

  const patternBlock =
    report.correlationPatterns.length > 0
      ? `
          <div class="analysis-box">
            <div class="analysis-title">📊 分子栄養学的な相関パターン</div>
            <ul class="pattern-list">${patternsMarkup}</ul>
          </div>
        `
      : "";

  const adviceButtonText = appState.adviceRequested ? "アドバイス希望登録済み" : "無料でアドバイスを受ける";
  const guideLink = "https://c-grace.com/pages/%E4%BD%93%E8%B3%AA%E5%88%A5%E8%A7%A3%E8%AA%AC#";

  resultEl.innerHTML = `
    <header class="report-head">
      <div class="report-tag">Personal Report</div>
      <h2 class="report-title">分析結果レポート</h2>
      <p class="report-user">${report.userLine}</p>
    </header>

    <section class="card">
      <h3 class="card-title">🧬 体質タイプ傾向</h3>
      <div class="score-list">${typeScoresMarkup}</div>
      <div class="main-type">
        <div class="main-type-label">あなたのメインタイプ</div>
        ${mainTypeImageMarkup}
        <div class="main-type-value">${report.mainType}</div>
        ${mainTypeDescriptionMarkup}
      </div>
    </section>

    <section class="card">
      <h3 class="card-title">現在の体質バランス</h3>
      <div class="radar-wrap">
        ${buildRadarSvg(bodyLabels, report.bodyScores, 5)}
      </div>
      <div class="analysis-summary ${report.statusClass}">${report.statusIcon} ${report.statusMessage}</div>
      ${criticalBlock}
      ${cautionBlock}
      ${patternBlock}
    </section>

    <section class="cta-box">
      <p class="cta-copy">あなたの診断結果をもとに<br />土井千春が"今の状態に合ったアドバイス"をお届けします</p>
      <div class="cta-buttons">
        <button type="button" class="action-btn" id="advice-btn" ${appState.adviceRequested ? "disabled" : ""}>${adviceButtonText}</button>
        <a class="action-btn action-link" href="${guideLink}" target="_blank" rel="noopener noreferrer">体質別解説を見る</a>
      </div>
    </section>
  `;

  resultEl.querySelector("#advice-btn").addEventListener("click", () => {
    if (appState.adviceRequested) {
      return;
    }
    appState.adviceRequested = true;
    renderResult();
    showToast();
  });
}

function showToast() {
  toastEl.classList.remove("hidden");
  setTimeout(() => {
    toastEl.classList.add("hidden");
  }, 2600);
}

function resetAll() {
  if (appState.loadingTimer) {
    clearTimeout(appState.loadingTimer);
    appState.loadingTimer = null;
  }

  appState.form = {
    name: "",
    lineName: "",
    gender: "",
    age: "",
  };
  appState.formError = "";
  appState.stepIndex = 0;
  appState.answers = questions.map(() => new Set());
  appState.adviceRequested = false;
  appState.report = null;
  toastEl.classList.add("hidden");
}

renderIntro();
setScreen("intro");
