// custom-sidebar.js

// 定义自定义侧边栏结构
const sidebarContent = [
    {
      title: "English",
      children: [
        { title: "Introduction", link: "/docs/en/00-Introduction/README.md" },
      ],
    },
    {
      title: "中文",
      children: [
        { title: "前言", link: "/docs/cn/00-前言/README.md" },
        {
          title: "第一章：边缘 AI 编程基础",
          children: [
            { title: "01-边缘 AI 简介与 Jetson 硬件平台", link: "/docs/cn/1.边缘AI编程基础/01-边缘AI简介与Jetson硬件平台/README.md" },
          ],
        },
      ],
    },
  ];
  
  // 生成侧边栏 HTML
  function generateSidebarHTML(content) {
    let html = '<div class="custom-sidebar">';
    content.forEach((section) => {
      html += `<div class="sidebar-section">
                 <p class="section-title" onclick="toggleSection(this)">${section.title}</p>`;
      if (section.children) {
        html += `<ul class="section-content">`;
        section.children.forEach((child) => {
          if (child.link) {
            html += `<li><a href="#${child.link}">${child.title}</a></li>`;
          } else {
            html += `<li class="subsection">
                       <p class="subsection-title" onclick="toggleSection(this)">${child.title}</p>
                       <ul class="subsection-content">`;
            child.children.forEach((subChild) => {
              html += `<li><a href="#${subChild.link}">${subChild.title}</a></li>`;
            });
            html += `</ul></li>`;
          }
        });
        html += `</ul>`;
      }
      html += `</div>`;
    });
    html += '</div>';
    return html;
  }
  
  // 插入自定义侧边栏到页面
  document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar-nav");
    if (sidebar) {
      sidebar.innerHTML = generateSidebarHTML(sidebarContent);
    }
  });
  
  // 折叠功能
  function toggleSection(element) {
    const content = element.nextElementSibling;
    if (content) {
      element.classList.toggle("active");
      content.style.display = content.style.display === "none" ? "block" : "none";
    }
  }
  