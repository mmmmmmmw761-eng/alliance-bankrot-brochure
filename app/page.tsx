"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Globe,
  FileText,
  Users,
  CheckCircle,
  Clock,
  Wallet,
  ScrollText,
  Building2,
  Receipt,
  Gavel,
  ClipboardList,
  QrCode,
} from "lucide-react"

type ViewMode = "outer" | "inner"
type FoldState = "folded" | "unfolded"

const DISCLAIMER_TEXT =
  "Банкротство влечёт негативные последствия, в том числе ограничения на получение кредита и повторное банкротство в течение пяти лет. Предварительно обратитесь к своему кредитору и в МФЦ."

export default function BrochurePage() {
  const [viewMode, setViewMode] = useState<ViewMode>("outer")
  const [foldState, setFoldState] = useState<FoldState>("unfolded")

  return (
    <main className="min-h-screen bg-muted/30 py-8 px-4 flex flex-col items-center">
      <h1 className="text-xl font-semibold text-center mb-4 text-foreground">
        Интерактивный буклет — АльянсБанкрот
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <Button
          variant={viewMode === "outer" ? "default" : "outline"}
          onClick={() => setViewMode("outer")}
          size="sm"
        >
          Внешняя сторона
        </Button>
        <Button
          variant={viewMode === "inner" ? "default" : "outline"}
          onClick={() => setViewMode("inner")}
          size="sm"
        >
          Внутренняя сторона
        </Button>
        <Button
          variant="outline"
          onClick={() => setFoldState(foldState === "folded" ? "unfolded" : "folded")}
          size="sm"
        >
          {foldState === "folded" ? "Развернуть" : "Сложить"}
        </Button>
      </div>

      {/* Brochure - fixed A4 landscape aspect ratio */}
      <div
        className="bg-white shadow-xl border border-border overflow-hidden"
        style={{
          width: "min(92vw, 920px)",
          aspectRatio: "297 / 210",
        }}
      >
        {viewMode === "outer" ? (
          <div
            className="grid grid-cols-3 h-full w-full"
            style={{ perspective: "1200px" }}
          >
            <OuterPanels foldState={foldState} />
          </div>
        ) : (
          <div className="flex flex-col h-full w-full">
            <div
              className="grid grid-cols-3 flex-1 min-h-0 w-full"
              style={{ perspective: "1200px" }}
            >
              <InnerPanels foldState={foldState} />
            </div>
            {/* Горизонтальный дисклеймер через все 3 панели */}
            <div className="shrink-0 bg-primary/5 border-t border-primary/15 px-4 py-2">
              <p className="text-[9px] leading-snug text-muted-foreground text-center">
                <span className="font-medium text-foreground/80">Важно: </span>
                {DISCLAIMER_TEXT}
              </p>
            </div>
          </div>
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-4">
        Нажмите «Развернуть» / «Сложить» для анимации
      </p>
    </main>
  )
}

function OuterPanels({ foldState }: { foldState: FoldState }) {
  const isUnfolded = foldState === "unfolded"

  return (
    <>
      {/* Panel 1 - Работаем с ответственностью */}
      <div
        className="h-full overflow-hidden border-r border-dashed border-border/50 transition-transform duration-700 ease-in-out origin-right"
        style={{
          transformStyle: "preserve-3d",
          transform: isUnfolded ? "rotateY(0deg)" : "rotateY(-150deg)",
        }}
      >
        <div className="box-border p-4 h-full min-h-0 flex flex-col bg-white">
          <h3 className="font-semibold text-sm text-foreground shrink-0 mb-0.5">
            Работаем с ответственностью
          </h3>
          <p className="text-[9px] text-muted-foreground shrink-0 mb-2.5">
            Прозрачные условия, зафиксированные в договоре
          </p>

          <div className="flex-1 min-h-0 overflow-hidden space-y-1.5">
            <div className="bg-white border border-border rounded p-2">
              <p className="text-[10px] font-semibold text-foreground leading-tight">
                Двойной возврат оплаты
              </p>
              <p className="text-[9px] text-muted-foreground leading-tight mt-0.5">
                если мы не выполним обязательства, закреплённые в договоре
              </p>
            </div>
            <div className="bg-white border border-border rounded p-2">
              <p className="text-[10px] font-semibold text-foreground leading-tight">
                Фиксированная стоимость
              </p>
              <p className="text-[9px] text-muted-foreground leading-tight mt-0.5">
                условия прописываются до начала работы
              </p>
            </div>
            <div className="bg-white border border-border rounded p-2">
              <p className="text-[10px] font-semibold text-foreground leading-tight">
                Рассрочка оплаты
              </p>
              <p className="text-[9px] text-muted-foreground leading-tight mt-0.5">
                индивидуально по ситуации
              </p>
            </div>
            <div className="bg-white border border-border rounded p-2">
              <p className="text-[10px] font-semibold text-foreground leading-tight">
                Письменный план действий
              </p>
              <p className="text-[9px] text-muted-foreground leading-tight mt-0.5">
                после первичного разбора
              </p>
            </div>
          </div>

          <p className="text-[8px] text-muted-foreground/80 italic shrink-0 mt-2 leading-tight">
            Условия возврата и перечень обязательств фиксируются в договоре.
          </p>
        </div>
      </div>

      {/* Panel 2 - Что подготовить к консультации */}
      <div
        className="h-full overflow-hidden border-r border-dashed border-border/50 transition-transform duration-700 ease-in-out origin-right"
        style={{
          transformStyle: "preserve-3d",
          transform: isUnfolded ? "rotateY(0deg)" : "rotateY(-130deg)",
          transitionDelay: isUnfolded ? "0.1s" : "0s",
        }}
      >
        <div className="box-border p-4 h-full min-h-0 flex flex-col bg-white">
          <div className="flex items-center gap-1.5 shrink-0 mb-2">
            <ClipboardList className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-sm text-foreground">
              Что подготовить к консультации
            </h3>
          </div>

          <div className="space-y-1 shrink-0">
            <div className="flex items-start gap-1.5 text-[10px] leading-tight text-foreground">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span>примерная сумма долгов</span>
            </div>
            <div className="flex items-start gap-1.5 text-[10px] leading-tight text-foreground">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span>банки, МФО, расписки</span>
            </div>
            <div className="flex items-start gap-1.5 text-[10px] leading-tight text-foreground">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span>просрочки и исполнительные производства</span>
            </div>
            <div className="flex items-start gap-1.5 text-[10px] leading-tight text-foreground">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span>доходы и имущество</span>
            </div>
            <div className="flex items-start gap-1.5 text-[10px] leading-tight text-foreground">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span>письма, повестки, требования</span>
            </div>
          </div>

          <div className="flex-1 min-h-0 mt-3 flex flex-col overflow-hidden">
            <p className="text-[9px] font-medium text-muted-foreground shrink-0 mb-1">
              Заметки специалиста:
            </p>
            <div className="flex-1 min-h-0 border border-border/60 rounded p-2 overflow-hidden flex flex-col justify-around">
              <div className="border-b border-dashed border-border/40 h-3" />
              <div className="border-b border-dashed border-border/40 h-3" />
              <div className="border-b border-dashed border-border/40 h-3" />
              <div className="border-b border-dashed border-border/40 h-3" />
            </div>
          </div>

          {/* Дисклеймер на этой панели — нет, только на обложке. Здесь добавим легкий блок про дисклеймер на внешней стороне? Нет, требование: на обложку */}
        </div>
      </div>

      {/* Panel 3 - Обложка */}
      <div className="h-full overflow-hidden">
        <div className="box-border p-4 h-full min-h-0 flex flex-col bg-white">
          {/* Логотип */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-primary text-primary-foreground px-2 py-1 rounded font-bold text-sm">
              Альянс
            </div>
            <div className="text-[9px] leading-tight text-foreground font-medium">
              <p>БАНКРОТ</p>
            </div>
          </div>

          {/* Заголовок */}
          <div className="mt-2 shrink-0">
            <h2 className="text-base font-bold text-foreground leading-tight">
              Юридическая помощь при долгах
            </h2>
            <p className="text-[10px] text-muted-foreground leading-snug mt-1">
              Разберём ситуацию, проверим риски и составим понятный план действий.
            </p>
          </div>

          {/* CTA — бесплатная консультация */}
          <div className="mt-2 bg-primary/10 border border-primary/30 rounded-lg p-2 shrink-0">
            <p className="text-[11px] font-semibold text-primary text-center leading-tight">
              Бесплатная первичная консультация
            </p>
          </div>

          {/* Контакты + QR */}
          <div className="flex-1 min-h-0 mt-2 flex items-center gap-2 overflow-hidden">
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center gap-1.5 text-[10px]">
                <Phone className="w-3 h-3 text-primary shrink-0" />
                <span className="font-semibold text-foreground">8 800 511 11 00</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px]">
                <Globe className="w-3 h-3 text-primary shrink-0" />
                <span className="font-medium text-foreground">альянсбанкрот.рф</span>
              </div>
              <p className="text-[9px] text-muted-foreground leading-tight pt-0.5">
                Звонок по России бесплатный
              </p>
            </div>
            <div className="shrink-0 bg-muted/30 border border-border rounded p-1 flex flex-col items-center">
              <div className="w-12 h-12 bg-white border border-border flex items-center justify-center">
                <QrCode className="w-9 h-9 text-foreground" />
              </div>
              <p className="text-[7px] text-muted-foreground mt-0.5 leading-none">
                QR для записи
              </p>
            </div>
          </div>

          {/* Дисклеймер снизу обложки */}
          <div className="shrink-0 mt-2 bg-muted/40 border border-border/60 rounded px-2 py-1.5">
            <p className="text-[8px] leading-snug text-muted-foreground">
              <span className="font-medium text-foreground/80">Важно: </span>
              {DISCLAIMER_TEXT}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

function InnerPanels({ foldState }: { foldState: FoldState }) {
  const isUnfolded = foldState === "unfolded"

  return (
    <>
      {/* Panel 1 - Проблема */}
      <div
        className="h-full overflow-hidden border-r border-dashed border-border/50 transition-transform duration-700 ease-in-out origin-left"
        style={{
          transformStyle: "preserve-3d",
          transform: isUnfolded ? "rotateY(0deg)" : "rotateY(150deg)",
        }}
      >
        <div className="box-border p-4 h-full min-h-0 flex flex-col bg-white">
          <h3 className="font-semibold text-sm text-foreground shrink-0">
            Долги стали давить?
          </h3>
          <p className="text-[10px] text-muted-foreground leading-snug shrink-0 mt-1.5">
            Бумаги, звонки, просрочки и требования могут выбивать из колеи. Важно не тянуть и спокойно разобрать, какие законные варианты есть именно в вашей ситуации.
          </p>

          <div className="flex-1 min-h-0 mt-3 overflow-hidden space-y-1">
            <div className="flex items-center gap-2 p-1.5 bg-muted/40 rounded">
              <Wallet className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span className="text-[10px] text-foreground">кредиты и кредитные карты</span>
            </div>
            <div className="flex items-center gap-2 p-1.5 bg-muted/40 rounded">
              <Receipt className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span className="text-[10px] text-foreground">микрозаймы</span>
            </div>
            <div className="flex items-center gap-2 p-1.5 bg-muted/40 rounded">
              <ScrollText className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span className="text-[10px] text-foreground">расписки</span>
            </div>
            <div className="flex items-center gap-2 p-1.5 bg-muted/40 rounded">
              <Building2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span className="text-[10px] text-foreground">ЖКХ и налоги</span>
            </div>
            <div className="flex items-center gap-2 p-1.5 bg-muted/40 rounded">
              <Gavel className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span className="text-[10px] text-foreground">исполнительные производства</span>
            </div>
          </div>

          <p className="text-[10px] text-primary font-medium text-center shrink-0 mt-2 leading-tight">
            Вы не обязаны разбираться в этом одни.
          </p>
        </div>
      </div>

      {/* Panel 2 - Помощь (главная) */}
      <div
        className="h-full overflow-hidden border-r border-dashed border-border/50 transition-transform duration-700 ease-in-out origin-left"
        style={{
          transformStyle: "preserve-3d",
          transform: isUnfolded ? "rotateY(0deg)" : "rotateY(130deg)",
          transitionDelay: isUnfolded ? "0.1s" : "0s",
        }}
      >
        <div className="box-border p-3 h-full min-h-0 flex flex-col bg-white">
          <div className="bg-muted/15 rounded py-1 px-2 mb-2 shrink-0 text-center">
            <span className="text-[8px] text-muted-foreground">[Фото: консультация со специалистом]</span>
          </div>

          <h3 className="font-semibold text-sm text-foreground shrink-0 text-center leading-tight">
            Разберём вашу ситуацию и составим план
          </h3>
          <p className="text-[9px] text-muted-foreground shrink-0 mt-1 mb-2 text-center leading-snug">
            Простым языком объясним порядок действий, возможные риски, сроки и расходы.
          </p>

          <div className="flex-1 min-h-0 overflow-hidden space-y-1">
            <div className="bg-white border border-border rounded p-1.5">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-[8px] font-bold shrink-0">1</div>
                <p className="text-[10px] font-medium text-foreground">Бесплатная консультация</p>
              </div>
            </div>
            <div className="bg-white border border-border rounded p-1.5">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-[8px] font-bold shrink-0">2</div>
                <p className="text-[10px] font-medium text-foreground">Анализ долгов</p>
              </div>
            </div>
            <div className="bg-white border border-border rounded p-1.5">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-[8px] font-bold shrink-0">3</div>
                <p className="text-[10px] font-medium text-foreground">Проверка рисков</p>
              </div>
            </div>
            <div className="bg-white border border-border rounded p-1.5">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-[8px] font-bold shrink-0">4</div>
                <p className="text-[10px] font-medium text-foreground">Подготовка документов</p>
              </div>
            </div>
            <div className="bg-white border border-border rounded p-1.5">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-[8px] font-bold shrink-0">5</div>
                <p className="text-[10px] font-medium text-foreground">Сопровождение процедуры</p>
              </div>
            </div>
          </div>

          <p className="text-[8px] text-muted-foreground text-center shrink-0 mt-2 leading-tight">
            Работаем с задолженностями по: кредиты · микрозаймы · ЖКХ · налоги · расписки
          </p>
        </div>
      </div>

      {/* Panel 3 - Спокойствие */}
      <div className="h-full overflow-hidden">
        <div className="box-border p-4 h-full min-h-0 flex flex-col bg-white">
          <h3 className="font-semibold text-sm text-primary shrink-0 leading-tight">
            Когда есть план — становится спокойнее
          </h3>
          <p className="text-[10px] text-muted-foreground leading-snug shrink-0 mt-1.5">
            После консультации вы поймёте, какие шаги возможны, какие документы нужны и какие риски важно учесть заранее.
          </p>

          <div className="flex-1 min-h-0 mt-3 overflow-hidden space-y-1">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span className="text-[10px] text-foreground leading-tight">оценим перспективы вашей ситуации</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span className="text-[10px] text-foreground leading-tight">объясним порядок процедуры</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span className="text-[10px] text-foreground leading-tight">покажем возможные риски</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span className="text-[10px] text-foreground leading-tight">подготовим список документов</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span className="text-[10px] text-foreground leading-tight">зафиксируем стоимость и этапы работы</span>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded p-2 shrink-0 mt-2">
            <p className="text-[10px] font-semibold text-primary text-center leading-tight">
              Первый шаг — бесплатный разбор ситуации.
            </p>
            <div className="flex items-center justify-center gap-1.5 mt-1">
              <Phone className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-medium text-foreground">8 800 511 11 00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
