import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { menuOutline, settingsOutline } from "ionicons/icons";
const pages = [
  { label: "Home", icon: menuOutline, route: "/home" },
  { label: "Settings", icon: settingsOutline, route: "/settings" },
];

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jesus Garcia SE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {pages.map((page, index) => (
            <IonMenuToggle autoHide={false}>
              <IonItem key={index + "_route.label"} routerLink={page.route}>
                <IonIcon icon={page.icon} slot="start" />
                <IonLabel>{page.label}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
