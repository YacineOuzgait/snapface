import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id:1,
            title: "Sahra Marocain",
            description: "Très belle photo du desert marocain avec une vue aérienne.",
            imageURL: "https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            createDate: new Date(),
            like: 150,
            location: "Maroc",
        },
        {
            id:2,
            title: "Montagne Rocheuse",
            description: "Montagnes Rocheuses Sous Le Ciel Bleu",
            imageURL: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            createDate: new Date(),
            like: 100,
            location: "USA",
        },
        {
            id:3,
            title: "Maldive",
            description: "Photo De Cocotiers Au Bord De La Mer",
            imageURL: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            createDate: new Date(),
            like: 250,
        },
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number) : FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap) {
            throw new Error('FaceSnap not found!');
        }
        else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'Like!' | 'Dislike!'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'Like!' ? faceSnap.like++ : faceSnap.like--;
    }

}