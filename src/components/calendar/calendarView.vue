<template>
    <div class="card-body">
        <div class="row" id="wrap">
            <div class="col-xxl-3 box-col-30">
                <div id="external-events">
                    <h4 class="mb-3 f-22"> Draggable Events</h4>
                    <div id="external-events-list">
                        <div
                            class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn btn-primary mb-2 w-100 text-start b-r-6 draggableButton">
                            <div class="fc-event-main"> <i class="fa fa-birthday-cake me-2"></i>Birthday Party
                            </div>
                        </div>
                        <div
                            class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn-info btn mb-2 w-100 text-start b-r-5 draggableButton">
                            <div class="fc-event-main"> <i class="fa fa-user me-2"></i>Meeting With Team</div>
                        </div>
                        <div
                            class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn-success btn mb-2 w-100 text-start b-r-5 draggableButton">
                            <div class="fc-event-main"> <i class="fa fa-plane me-2"></i>Tour & Picnic</div>
                        </div>
                        <div
                            class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn-danger btn mb-2 w-100 text-start b-r-5 draggableButton">
                            <div class="fc-event-main"> <i class="fa fa-file-text me-2"></i>Reporting Schedule
                            </div>
                        </div>
                        <div
                            class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn-warning btn mb-2 w-100 text-start b-r-5 draggableButton">
                            <div class="fc-event-main"> <i class="fa fa-briefcase me-2"></i>Lunch & Break</div>
                        </div>
                    </div>
                    <p>
                        <input class="checkbox_animated" id="drop-remove" type="checkbox">
                        <label class="f-18" for="drop-remove">remove after drop</label>
                    </p>
                </div>
            </div>
            <div class="col-xxl-9 box-col-70">
                <div class="calendar-default" id="calendar-container">
                    <FullCalendar class='demo-app-calendar' :options='calendarOptions'></FullCalendar>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import { INITIAL_EVENTS, createEventId } from "@/store/modules/calendar";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
export default {
    components: { FullCalendar, },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
                initialView: "dayGridMonth",
                dropAccept: '.draggableButton',
                dateClick: this.handleDateClick,
                initialEvents: INITIAL_EVENTS, editable: true,
                selectable: true, selectMirror: true, dayMaxEvents: true,
                weekends: true, select: this.handleDateSelect, eventClick: this.handleEventClick,
                eventsSet: this.handleEvents, droppable: true,
                drop: this.HandleDrop,
                headerToolbar: {
                    left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay",
                },
            },
        };
    },
    methods: {
        HandleDrop(selectInfo) {
            let title = selectInfo.draggedEl.outerText
            let calendarApi = selectInfo.view.calendar
            calendarApi.unselect()
            if (title) {
                calendarApi.addEvent({
                    id: createEventId(),
                    title, start: selectInfo.date, allDay: true
                })
            }
        },
        handleWeekendsToggle() {
            this.calendarOptions.weekends = !this.calendarOptions.weekends
        },
        handleDateSelect(selectInfo) {
            let title = prompt('Please enter a new title for your event')
            let calendarApi = selectInfo.view.calendar
            calendarApi.unselect()
            if (title) {
                calendarApi.addEvent({
                    id: createEventId(),
                    title, start: selectInfo.startStr, end: selectInfo.endStr, allDay: selectInfo.allDay,
                })
            }
        },
        handleEventClick(clickInfo) {
            if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
                clickInfo.event.remove()
            }
        },
        handleEvents(events) {
            this.currentEvents = events
        },
    },
    mounted() {
        let buttons = document.getElementsByClassName('draggableButton')
        for (var i = 0; i < buttons.length; i++) {
            new Draggable(buttons[i]);
        }
    }
};
</script>