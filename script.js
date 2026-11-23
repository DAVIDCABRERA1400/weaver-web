/* ==========================================================================
   WEAVER — Interactive Loom Canvas + Live Data-Weaving Engine
   ========================================================================== */

(function () {
  "use strict";

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- 1. INTERACTIVE WEAVER LOOM (Canvas 2D) ---------- */
  const canvas = document.getElementById("loom-canvas");

  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let pointer = { x: -9999, y: -9999, active: false };
    let nodes = [];

    function initNodes() {
      const count = width < 768 ? 22 : 42;
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          r: Math.random() * 1.8 + 1.4
        });
      }
    }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    }

    function drawGeometricWeb(cx, cy, maxR) {
      ctx.save();
      ctx.strokeStyle = "rgba(76, 79, 224, 0.16)";
      ctx.lineWidth = 1;

      const rings = [maxR * 0.36, maxR * 0.66, maxR];
      const sides = 8;

      // Radial spokes
      for (let i = 0; i < sides; i++) {
        const angle = (Math.PI * 2 * i) / sides;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
        ctx.stroke();
      }

      // Concentric octagons
      rings.forEach(function (r) {
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
          const angle = (Math.PI * 2 * i) / sides;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      // Signature Weaver W geometry with 1 coral center node
      const s = maxR * 0.48;
      const pts = [
        { x: cx - s, y: cy - s * 0.42 },
        { x: cx - s * 0.48, y: cy + s * 0.52 },
        { x: cx, y: cy - s * 0.24 },
        { x: cx + s * 0.48, y: cy + s * 0.52 },
        { x: cx + s, y: cy - s * 0.42 }
      ];

      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.88)";
      ctx.lineWidth = 2.6;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      pts.forEach(function (p, idx) {
        if (idx === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();

      pts.forEach(function (p, idx) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, idx === 2 ? 6.5 : 4.2, 0, Math.PI * 2);
        ctx.fillStyle = idx === 2 ? "#FF6B4A" : "#FFFFFF";
        ctx.fill();
      });

      ctx.restore();
    }

    function renderFrame() {
      ctx.clearRect(0, 0, width, height);

      // Anchor geometric Weaver web on the right on desktop, cleanly above headline on mobile
      const anchorX = width < 768 ? width * 0.76 : width * 0.76;
      const anchorY = width < 768 ? height * 0.16 : height * 0.38;
      const webRadius = width < 768 ? Math.min(width * 0.25, 92) : Math.min(width * 0.19, 210);

      drawGeometricWeb(anchorX, anchorY, webRadius);

      const linkDist = width < 768 ? 115 : 155;

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.28;
            ctx.beginPath();
            ctx.strokeStyle = "rgba(76, 79, 224, " + alpha.toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }

        // Pointer magnetic threads
        if (pointer.active) {
          const pdx = n.x - pointer.x;
          const pdy = n.y - pointer.y;
          const pdist = Math.hypot(pdx, pdy);
          if (pdist < 190) {
            const pAlpha = (1 - pdist / 190) * 0.55;
            ctx.beginPath();
            ctx.strokeStyle = "rgba(125, 128, 255, " + pAlpha.toFixed(3) + ")";
            ctx.lineWidth = 1.2;
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.36)";
        ctx.fill();
      }

      if (!reducedMotion) {
        requestAnimationFrame(renderFrame);
      }
    }

    resize();
    renderFrame();

    window.addEventListener("resize", function () {
      resize();
      if (reducedMotion) renderFrame();
    });

    const heroEl = canvas.parentElement;
    heroEl.addEventListener("pointermove", function (e) {
      const rect = heroEl.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    });
    heroEl.addEventListener("pointerleave", function () {
      pointer.active = false;
    });
  }

  /* ---------- 2. LIVE DATA-WEAVING ENGINE ---------- */
  const flowData = {
    caja: {
      sources: [
        { name: "Chats de WhatsApp", state: "Boletas dispersas" },
        { name: "Bancos locales", state: "Depósitos sin conciliar" },
        { name: "Hojas de Excel", state: "Versiones desactualizadas" },
        { name: "Cobros pendientes", state: "Seguimiento manual" }
      ],
      out1Label: "Ingresos verificados del mes",
      out1Value: "Q48,920",
      out1Note: "94% cobrado · Conciliación en un clic",
      out2Label: "Alertas tempranas detectadas",
      out2Value: "Q2,850",
      out2Note: "3 saldos con atraso identificados antes del cierre"
    },
    operacion: {
      sources: [
        { name: "Equipo comercial", state: "Consultas sin visibilidad" },
        { name: "Mantenimiento", state: "Reportes perdidos en chat" },
        { name: "Entregas y altas", state: "Formularios sueltos" },
        { name: "Turnos y sedes", state: "Información fragmentada" }
      ],
      out1Label: "Tiempo de respuesta operativa",
      out1Value: "14 min",
      out1Note: "Cada área consulta la misma fuente en vivo",
      out2Label: "Solicitudes fuera de control",
      out2Value: "0",
      out2Note: "Trazabilidad completa de principio a fin"
    },
    rentabilidad: {
      sources: [
        { name: "Ingresos por sede", state: "Datos separados" },
        { name: "Costos y servicios", state: "Cargos olvidados" },
        { name: "Capacidad ociosa", state: "Pérdida invisible" },
        { name: "Histórico mensual", state: "Sin comparativa" }
      ],
      out1Label: "Margen operativo real",
      out1Value: "31.4%",
      out1Note: "Calculado al instante con datos reales de operación",
      out2Label: "Fuga mensual recuperable",
      out2Value: "Q6,400",
      out2Note: "Capacidad sin facturar visible desde el día 1"
    }
  };

  const flowTabs = document.querySelectorAll("[data-flow-tab]");
  const sourcesContainer = document.getElementById("engine-sources");
  const out1Label = document.getElementById("out-1-label");
  const out1Value = document.getElementById("out-1-value");
  const out1Note = document.getElementById("out-1-note");
  const out2Label = document.getElementById("out-2-label");
  const out2Value = document.getElementById("out-2-value");
  const out2Note = document.getElementById("out-2-note");

  function renderFlow(key) {
    const data = flowData[key];
    if (!data) return;

    flowTabs.forEach(function (tab) {
      tab.setAttribute(
        "aria-selected",
        String(tab.getAttribute("data-flow-tab") === key)
      );
    });

    if (sourcesContainer) {
      sourcesContainer.innerHTML = data.sources
        .map(function (s) {
          return (
            '<div class="source-node">' +
            '<span class="source-node-name">' +
            s.name +
            "</span>" +
            '<span class="source-node-state">' +
            s.state +
            "</span>" +
            "</div>"
          );
        })
        .join("");
    }

    if (out1Label) out1Label.textContent = data.out1Label;
    if (out1Value) out1Value.textContent = data.out1Value;
    if (out1Note) out1Note.textContent = data.out1Note;
    if (out2Label) out2Label.textContent = data.out2Label;
    if (out2Value) out2Value.textContent = data.out2Value;
    if (out2Note) out2Note.textContent = data.out2Note;
  }

  flowTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      renderFlow(tab.getAttribute("data-flow-tab"));
    });
  });

  renderFlow("caja");
})();
