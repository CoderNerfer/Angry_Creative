package sql

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"
)

func LikePost(response http.ResponseWriter, request *http.Request, id string) {
	if id != "" {
		session, _ := store.Get(request, "Logged...")
		Mail := session.Values["Email "]

		ALLTABLEUser := SelectAllFromTable(db, "users")
		ArrUser := []User{}
		for ALLTABLEUser.Next() {
			var x User
			err := ALLTABLEUser.Scan(&x.Id, &x.Name, &x.Email, &x.Password, &x.Like, &x.Post)

			if err != nil {
				log.Fatal(err)
			}
			if x.Email == Mail {
				ArrUser = append(ArrUser, x)
			}
		}

		ALLTABLE := SelectAllFromTable(db, "posts")
		ArrTagsBrut := []Post{}
		Id_post, _ := strconv.Atoi(id)
		for ALLTABLE.Next() {
			var p Post
			err := ALLTABLE.Scan(&p.Id, &p.Like, &p.Views, &p.Content, &p.Name, &p.Tags, &p.User_id, &p.ViewList, &p.LikeList)

			if err != nil {
				log.Fatal(err)
			}
			if p.Id == Id_post {
				ArrTagsBrut = append(ArrTagsBrut, p)
				break
			}

		}

		fmt.Println("like list", ArrTagsBrut[0].LikeList)
		fmt.Println("contain", strings.Contains(string(ArrTagsBrut[0].LikeList), ArrUser[0].Name))
		if !(strings.Contains(string(ArrTagsBrut[0].LikeList), ArrUser[0].Name)) {
			// // Ajouteur le Like car nom pas dans la liste
			// fmt.Println("like list", ArrTagsBrut[0].LikeList+ArrUser[0].Name)
			// fmt.Println("contain", strings.Contains(string(ArrTagsBrut[0].LikeList+ArrUser[0].Name), ArrUser[0].Name))
			// upStmt := "UPDATE `posts` SET `like` = ? WHERE ( `id` = ?);"
			// stmt, err := db.Prepare(upStmt)
			// fmt.Println("Guillomne")
			// if err != nil {
			// 	fmt.Println(err)
			// }
			// fmt.Println(ArrTagsBrut[0].Like)
			// defer stmt.Close()
			// var res sql.Result
			// res, err = stmt.Exec(ArrTagsBrut[0].Like+1, id)
			// fmt.Println("RowsAffect", res)
			// rowsAff, _ := res.RowsAffected()
			// if err != nil || rowsAff != 1 {
			// 	fmt.Println(err)
			// }
			// result, _ := db.Exec(`UPDATE posts SET like = ? WHERE id = ?`, ArrTagsBrut[0].Like+1, id)
			// fmt.Println(result)
			// upStmt2 := "UPDATE `posts` SET `likelist` = ? WHERE ( `id` = ?);"
			// stmt2, err2 := db.Prepare(upStmt2)

			// if err2 != nil {
			// 	fmt.Println(err2)
			// }
			// defer stmt2.Close()
			// var res2 sql.Result
			// res2, err2 = stmt2.Exec(ArrTagsBrut[0].LikeList+ArrUser[0].Name, id)
			// rowsAff2, _ := res2.RowsAffected()
			// if err2 != nil || rowsAff2 != 1 {
			// 	fmt.Println(err2)
			// }
		} else {
			// upStmt3 := "UPDATE `posts` SET `likelist` = ? WHERE ( `id` = ?);"
			// stmt3, err3 := db.Prepare(upStmt3)

			// if err3 != nil {
			// 	fmt.Println(err3)
			// }
			// defer stmt3.Close()
			// var res2 sql.Result
			// String := strings.ReplaceAll(ArrTagsBrut[0].LikeList, ArrUser[0].Name, "")

			// res2, err3 = stmt3.Exec(String, id)
			// rowsAff2, _ := res2.RowsAffected()
			// if err3 != nil || rowsAff2 != 1 {
			// 	fmt.Println(err3)
			// }

			// upStmt := "UPDATE `posts` SET `like` = ? WHERE ( `id` = ?);"
			// stmt, err := db.Prepare(upStmt)

			// if err != nil {
			// 	fmt.Println(err)
			// }

			// defer stmt.Close()
			// var res sql.Result

			// res, err = stmt.Exec(ArrTagsBrut[0].Like-1, id)
			// rowsAff, _ := res.RowsAffected()
			// if err != nil || rowsAff != 1 {
			// 	fmt.Println(err)
			// }
		}

	}
}
