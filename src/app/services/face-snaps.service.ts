import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService{
    faceSnaps: FaceSnap[] = [
        {
          title: "Sahra Marocain",
          description: "Très belle photo du desert marocain avec une vue aérienne.",
          imageURL: "https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          createDate: new Date(),
          like: 0,
          location: "Maroc",
        },
        {
          title: "Montagne Rocheuse",
          description:"Montagnes Rocheuses Sous Le Ciel Bleu",
          imageURL: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          createDate: new Date(),
          like: 6,
          location: "USA",
        },
        {
          title: "Maldive",
          description:"Photo De Cocotiers Au Bord De La Mer",
          imageURL: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          createDate: new Date(),
          like: 0,
        },
      ]
}