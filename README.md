# oc.uecook.top — 圣堂之魂个人创意网站

> 万物皆可浸染，唯你温暖如初。

**站点地址**：[oc.uecook.top](https://oc.uecook.top)
**版权所有**：© 2014–2026 圣堂之魂 / UeCook

---

## 项目简介

这是「圣堂之魂」个人创意网站的部分前端工程demo，包含小说阅读、作品展示、个人介绍、可拖拽底部导航栏。网站采用毛玻璃设计风格，支持亮色/暗色主题切换，基于原生 HTML / CSS / JavaScript 构建。

---

###  我的小说

全功能的在线小说阅读系统，支持多本小说的章节浏览与阅读进度管理。

**列表页（`我的小说/index.html`）**：
- 卡片式网格布局，卡片具有鼠标跟随聚光灯特效
- 从 `data/novels.js` 加载小说索引数据
- `NovelsManager` 提供按 ID、状态、标签、日期等维度的查询

**阅读页（`我的小说/reader.html`）**：
- 全屏沉浸式阅读器，固定顶部工具栏（返回、标题、设置/目录按钮）
- 右侧抽屉式章节目录侧边栏
- 可拖拽悬浮设置面板，支持：
  - 字体大小调整（12px – 36px，步进 1px）
  - 行间距切换（紧凑 1.6 / 舒适 1.8 / 宽松 2.0）
  - 亮色/暗色主题切换
- 阅读进度自动保存至 `localStorage`（`novelReadingProgress`），下次打开自动恢复
- 键盘导航：`←` 上一章 / `→` 下一章 / `Esc` 返回列表
- 章节数据通过 `<script>` 标签动态加载（`data/novels/{id}.js`），避免 CORS 问题

**数据文件**：
- `data/novels.js` — 小说索引（标题、摘要、标签、状态、日期等）
- `data/novels/1.js` ~ `4.js` — 各小说的章节数据（含 `.json` 副本）

---

###  我的作品

个人创作作品的瀑布流展示画廊，含详情弹窗。

**画廊页（`我的作品/index.html`）**：
- CSS `column-count` 自适应多列瀑布流布局
- 图片容错加载：自动尝试 `.jpg` → `.jpeg` → `.png` → `.webp` → `.svg` → `.gif` 回退
- 非置顶作品每次加载随机排列，置顶作品固定在前

**详情弹窗**：
- 左图右文分栏设计（移动端改为上图下文）
- 展示：标题、详细描述、创作日期、画师、稿件状态（常稿/买断/商用/私人）、约稿平台、标签
- 自定义可拖拽滚动条组件
- `Esc` 键关闭

**数据文件**（`我的作品/portfolio-data.js`）：
- `portfolioData` 数组 — 所有作品数据
- `PortfolioManager` 对象 — 数据查询管理器（按分类/标签/精选/日期查询，随机排序，分类统计等）
- 作品分类：插画（illustration）、角色设计（character）、概念设计（concept）、像素艺术（pixel）、动画（animation）

**图片目录**：`我的作品/images/`

---

###  关于我

Bento Grid 风格的个人介绍页。

**布局**（三栏网格）：
- **左栏**：头像、昵称、签名、人设资料（名字/原型/性别/核心/能力/性格）、技术标签
- **中栏**：关于我的文字介绍（角色世界观描述）
- **右栏**：社交媒体图标列（邮箱、GitHub、小红书、B站、QQ、微信、知乎）

**交互功能**：
- 所有卡片具备聚光灯鼠标跟随特效
- 外部链接点击弹出**跳转确认弹窗**，显示目标 URL，需用户手动确认
- 微信图标点击弹出**二维码弹窗**，二维码默认模糊遮罩，点击后显示（`img/wechat_add.jpg`）
- 邮箱链接直接调用 `mailto:`
- `Esc` 键关闭所有弹窗

**文件**：`关于我/关于页.html`、`关于我/img/`（头像、社交图标 SVG 等）

---

###  左下滑动导航栏

底部固定导航栏组件，滑块指示器可拖拽并与页面滚动双向联动。

**功能**：
- **滚动联动**：页面滚动时自动计算当前所在区域，同步更新导航项高亮和指示器位置
- **可拖拽滑块**：鼠标/触摸拖拽绿色指示器，实时滚动页面至对应位置
- **智能显隐**：在首页区域自动隐藏（`opacity: 0`），滚动超过首屏高度一半后渐入显示
- **返回首页**：左侧箭头按钮，平滑滚动回顶部
- **备案信息**：底部右侧展示 ICP 备案 + 公安网备（含公安图标 `beian.avif`）
- **性能优化**：使用 `requestAnimationFrame` 节流滚动事件

**文件**：`左下滑动/navbar-demo.html`、`左下滑动/beian.avif`

---

## 设计体系

### 主题系统

全站采用 CSS 变量驱动的**亮色/暗色双主题系统**，通过 `<html data-theme="dark|light">` 切换：

| 变量 | 亮色 | 暗色 |
|------|------|------|
| `--bg-color` | `#F8F8F8` | `#121212` |
| `--text-main` | `#1F1F1F` | `#F0F0F0` |
| `--text-body` | `#3D3D3D` | `#D4D4D4` |
| `--text-sub` | `#646464` | `#A0A0A0` |
| 强调色 | `rgb(79, 192, 93)` — 绿色 | 同左 |
| 卡片背景 | `rgba(255,255,255,0.8)` | `rgba(30,30,30,0.8)` |

主题偏好自动保存至 `localStorage`，跨页面保持一致。

### 视觉特效

- **毛玻璃**：`backdrop-filter: blur(20px)` 用于卡片、导航栏、弹窗背景
- **聚光灯**：鼠标跟随径向渐变光晕（小说卡片、关于页 Bento 卡片）
- **平滑过渡**：统一 `cubic-bezier` 缓动曲线
- **圆角系统**：`--border-radius-lg/md/sm`（24px / 20px / 16px）
- **隐藏滚动条**：全站隐藏原生滚动条（`scrollbar-width: none` + `::-webkit-scrollbar { display: none }`）

### 响应式

- 全站适配移动端与桌面端
- 主断点：`768px`（部分页面额外有 `640px` / `1024px`）
- 移动端自动切换为单列布局，弹窗全屏化

---

## 快速开始

本项目为纯静态网站，无需构建工具或安装依赖。

### 方法一：直接打开

双击任意 HTML 文件即可在浏览器中查看。

> **注意**：小说阅读器使用 `<script>` 标签加载数据，部分浏览器在 `file://` 协议下可能限制跨文件加载，建议使用本地服务器。

### 方法二：本地服务器

```bash
# 使用 Python
cd "D:\codeing\oc.uecook.top_demo"
python -m http.server 8080

# 使用 Node.js
npx serve "D:\codeing\oc.uecook.top_demo"
```

访问 `http://localhost:8080`。

---

## 许可证

本项目基于 [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause) 开源。

```
BSD 3-Clause License

Copyright (c) 2014-2026, 圣堂之魂 / UeCook
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
