// Theme
import { TbSun, TbMoon, TbSunMoon } from 'react-icons/tb';

// User
import { TbUsers, TbUserPlus, TbUserCircle, TbUserCheck } from 'react-icons/tb';

// CRUD?
import { TbPencil, TbEdit, TbTrash } from 'react-icons/tb';

// Calendar & Clock
import {
  TbCalendar,
  TbCalendarStar,
  TbCalendarCheck,
  TbCalendarShare,
  TbCalendarPlus,
  TbCalendarEventFilled
} from 'react-icons/tb';
import { TbClock } from 'react-icons/tb';

// search
import { TbSearch, TbFilter } from 'react-icons/tb';

// project
import {
  TbLayoutBoard,
  TbNotes,
  TbChecklist,
  TbDetails,
  TbLayoutKanbanFilled,
  TbProgressAlert
} from 'react-icons/tb';

// check
import {
  TbCircleCheck,
  TbCircleCheckFilled,
  TbInfoCircle,
  TbCirclePlus,
  TbCirclePlusFilled,
  TbSquareCheck
} from 'react-icons/tb';

// etc
import { TbX, TbPlus } from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import { PiImageSquare } from 'react-icons/pi';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { TbDots } from 'react-icons/tb';
import { GrTextAlignFull } from 'react-icons/gr';

const ICON_MAP = {
  //Theme
  sun: TbSun,
  moon: TbMoon,
  sunMoon: TbSunMoon,

  //User
  users: TbUsers,
  userPlus: TbUserPlus,
  userCircle: TbUserCircle,
  userCheck: TbUserCheck,

  //CRUD?
  pencil: TbPencil,
  edit: TbEdit,
  trash: TbTrash,

  //Calendar & Clock
  calendar: TbCalendar,
  calendarPlus: TbCalendarPlus,
  calendarCheck: TbCalendarCheck,
  calendarShare: TbCalendarShare,
  calendarStar: TbCalendarStar,
  calendarEvent: TbCalendarEventFilled,
  clock: TbClock,

  // search
  search: TbSearch,
  filter: TbFilter,

  //project
  board: TbLayoutBoard,
  notes: TbNotes,
  checkList: TbChecklist,
  details: TbDetails,
  kanban: TbLayoutKanbanFilled,
  squareCheck: TbSquareCheck,

  //circle
  circleCheck: TbCircleCheck,
  circleCheckFilled: TbCircleCheckFilled,
  circleInfo: TbInfoCircle,
  circlePlus: TbCirclePlus,
  circlePlusFilled: TbCirclePlusFilled,
  progressAlert: TbProgressAlert,

  // etc
  x: TbX,
  plus: TbPlus,
  arrowDown: IoIosArrowDown,
  eye: IoEye,
  imageSquare: PiImageSquare,
  speakerPhone: HiOutlineSpeakerphone,
  dot: TbDots,
  description: GrTextAlignFull
};

const Icon = ({ type, size = 24, color, ...props }) => {
  const IconComponent = ICON_MAP[type] || TbX;
  return (
    <div className="flex items-center justify-center">
      <IconComponent size={size} {...(color && { color })} {...props} />
    </div>
  );
};

export { Icon };
